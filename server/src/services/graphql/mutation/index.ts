import axios from 'axios';
import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { API_SERVER } from '../../../config';
import { DivisionType, UserType } from '../type/index';

import { Book, BookRepository } from '../../../repository/book/BookRepository';
import { Division, DivisionRepository } from '../../../repository/division/DivisionRepository';
import { User, UserRepository } from '../../../repository/user/UserRepository';

const bookRepository = new BookRepository();
const divisionRepository = new DivisionRepository();
const userRepository = new UserRepository();

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        birth: { type: new GraphQLNonNull(GraphQLString) },
        division: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parentValue, { email, birth, name, division }: User, context, info) {
        return userRepository.create({ email, birth, name, division });
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
        email: { type: GraphQLString },
      },
      resolve(parentValue, { id, email }: User) {
        return axios.delete(`${API_SERVER.JSON_SERVER}/users/${id}`)
          .then((res) => res.data);
      },
    },
    editUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        birth: { type: new GraphQLNonNull(GraphQLString) },
        division: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parentValue, args: User) {
        return axios.patch(`${API_SERVER.JSON_SERVER}/users/${args.id}`, args)
          .then((res) => res.data);
      },
    },
  },
});

export default mutation;
