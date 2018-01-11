"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var graphql = require("graphql");
var GraphQLObjectType = graphql.GraphQLObjectType, GraphQLString = graphql.GraphQLString, GraphQLInt = graphql.GraphQLInt, GraphQLSchema = graphql.GraphQLSchema;
var UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
        age: { type: graphql.GraphQLInt },
    },
});
var RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: { type: graphql.GraphQLString },
                name: { type: graphql.GraphQLString },
            },
            resolve: function (parentValue, args) {
                return axios_1.default.get("http://localhost:3000/users/" + args.id)
                    .then(function (response) { return response.data; });
            },
        },
    },
});
var schema = new GraphQLSchema({
    query: RootQuery,
});
exports.default = schema;
