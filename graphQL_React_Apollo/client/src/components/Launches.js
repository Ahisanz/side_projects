import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches {
            flight_number
            id
            name
            date_utc
            date_local
            success
            rocket
        }
    }
`;

export class Launches extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="display-4 my3">Launches</h1>
                <MissionKey/>
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({ loading, error, data}) => {
                            if(loading) return <h4>Loading...</h4>
                            if(error) console.log(error);

                            // console.log(data);

                            return(
                                <Fragment>
                                    { data.launches.map(launch => (
                                            <LaunchItem key={launch.flight_number}  launch={launch}></LaunchItem>
                                    ))
                                    }
                                </Fragment>
                            );
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default Launches