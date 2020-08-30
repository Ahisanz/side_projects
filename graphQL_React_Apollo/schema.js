const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');
const axios = require('axios');

// Launch Type

const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        id : {type : GraphQLString},
        name: { type: GraphQLString },
        date_utc: { type: GraphQLString },
        date_local: { type: GraphQLString },
        success: { type: GraphQLBoolean },
        rocket: { type: GraphQLString }
    })
});

//  Rocket Type ( not in version V4 )

// const RocketType = new GraphQLObjectType({
//     name: 'Rocket',
//     fields: () => ({
//         rocket_id: { type: GraphQLString },
//         rocket_name: { type: GraphQLString },
//         rocket_type: { type: GraphQLString }
//     })
// });

//  Root Query

const RootQuery = new GraphQLObjectType ({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                return axios.get('https://api.spacexdata.com/v4/launches')
                    .then(res => res.data);
            }
        },
        launch: {
            type: LaunchType,
            args: {
                id: { type: GraphQLString}
            },
            resolve(parent, args) {
                return axios.get(`https://api.spacexdata.com/v4/launches/${args.id}`)
                .then(res => res.data);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})