import axios from 'axios';
import { graphql, GraphQLSchema, printSchema } from 'graphql';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { API_SERVER} from '../../config';

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  },
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: { type: CompanyType },
  },
});

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context, info) {
        return axios.get(`${API_SERVER.JSON_SERVER}/users/${args.id}`)
          .then((response) => response.data);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args, context, info) {
        return axios.get(`${API_SERVER.JSON_SERVER}/users`)
          .then((response) => response.data);
      },
    },

    company: {
      type: CompanyType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context, info) {
        return axios.get(`${API_SERVER.JSON_SERVER}/companies/${args.id}`)
          .then((response) => response.data);
      },
    },
    companys: {
      type: new GraphQLList(CompanyType),
      resolve(parentValue, args, context, info) {
        return axios.get(`${API_SERVER.JSON_SERVER}/companies`)
          .then((response) => response.data);
      },
    },
  },
});

export default query;
