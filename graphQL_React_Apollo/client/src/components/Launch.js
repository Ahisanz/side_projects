import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LAUNCH_QUERY = gql `
    query LaunchQuery($id : String!) {
        launch(id: $id){
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

export class Launch extends Component {
    render() {
        let { id } = this.props.match.params;
        return (
            <Fragment>
                <Query query={LAUNCH_QUERY} variables={{id}}>
                    {
                        ({ loading, error, data }) => {
                            if(loading) return <h4>Loading</h4>
                            if(error) console.log(error)

                            const {name, flight_number, date_utc, success, rocket} = data.launch;

                            return <div>
                                <h1 className="display-4 my-3">Mission :<span className="text-dark"> {name}</span></h1>
                                <h4>Launch Details</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">Flight Number: {flight_number}</li>
                                    <li className="list-group-item">Launch Date: {date_utc}</li>
                                    <li className="list-group-item">Launch Successful: <span className={classNames({'text-success' : success, 'text-danger': !success})}> {success ? 'Yes' : 'No'}</span></li>
                                </ul>
                                <p>Rocket ID : {rocket}</p>
                                <hr/>
                                <Link to="/" className="btn btn-secondary">Back</Link>

                            </div>;
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default Launch
