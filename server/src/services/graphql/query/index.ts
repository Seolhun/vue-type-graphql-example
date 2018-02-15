import axios from 'axios';
import { graphql, GraphQLSchema, printSchema } from 'graphql';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLString } from 'graphql/type/scalars';
import { API_SERVER } from '../../../config';
import { BookType, DivisionType, UserType } from '../type';

import { Book, BookRepository } from '../../../repository/book/BookRepository';
import { Division, DivisionRepository } from '../../../repository/division/DivisionRepository';
import { User, UserRepository } from '../../../repository/user/UserRepository';

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
      async resolve(parentValue, args, context, info) {
        const result = await axios.get(`${API_SERVER.JSON_SERVER}/users`);
        return result.data;
      },
    },

    book: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context, info) {
        return axios.get(`${API_SERVER.JSON_SERVER}/books/${args.id}`)
          .then((response) => response.data);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parentValue, args, context, info) {
        return axios.get(`${API_SERVER.JSON_SERVER}/books`)
          .then((response) => response.data);
      },
    },

    division: {
      type: DivisionType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args, context, info) {
        return axios.get(`${API_SERVER.JSON_SERVER}/divisions/${args.id}`)
          .then((response) => response.data);
      },
    },
    divisions: {
      type: new GraphQLList(DivisionType),
      resolve(parentValue, args, context, info) {
        return axios.get(`${API_SERVER.JSON_SERVER}/divisions`)
          .then((response) => response.data);
      },
    },
  },
});

export default query;
