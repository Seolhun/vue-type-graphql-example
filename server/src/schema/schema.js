"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var graphql = require("graphql");
var GraphQLObjectType = graphql.GraphQLObjectType, GraphQLString = graphql.GraphQLString, GraphQLInt = graphql.GraphQLInt, GraphQLSchema = graphql.GraphQLSchema;
var CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: {
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
        description: { type: graphql.GraphQLString },
    },
});
var UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
        age: { type: graphql.GraphQLInt },
        company: { type: CompanyType },
    },
});
var RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: { type: graphql.GraphQLString },
            },
            resolve: function (parentValue, args) {
                console.log('UserType', parentValue, args);
                return axios_1.default.get("http://localhost:3000/users/" + args.id)
                    .then(function (response) { return response.data; });
            },
        },
        company: {
            type: CompanyType,
            args: {
                id: { type: graphql.GraphQLString },
            },
            resolve: function (parentValue, args) {
                console.log('CompanyType', parentValue, args);
                return axios_1.default.get("http://localhost:3000/companies/" + args.id)
                    .then(function (response) { return response.data; });
            },
        },
    },
});
var schema = new GraphQLSchema({
    query: RootQuery,
});
exports.default = schema;
