import axios from 'axios';
import * as graphql from 'graphql';

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = graphql;

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
  },
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLInt },
    company: { type: CompanyType },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: graphql.GraphQLString },
      },
      resolve(parentValue, args) {
        console.log('UserType', parentValue, args);
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then((response) => response.data);
      },
    },
    company: {
      type: CompanyType,
      args: {
        id: { type: graphql.GraphQLString },
      },
      resolve(parentValue, args) {
        console.log('CompanyType', parentValue, args);
        return axios.get(`http://localhost:3000/companies/${args.id}`)
          .then((response) => response.data);
      },
    },
  },
});

const schema = new GraphQLSchema(
  {
    query: RootQuery,
  },
);

export default schema;
