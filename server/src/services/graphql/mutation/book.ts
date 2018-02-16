import { GraphQLNonNull, GraphQLObjectType, GraphQLFieldConfigMap } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType, DivisionType, UserType } from '../type/index';

import { Book, BookRepository } from '../../../repository/book/BookRepository';
const bookRepository = new BookRepository();

const bookkMutation:GraphQLFieldConfigMap<any, any> = {
  addUser: {
    type: UserType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      writer: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve(parentValue, { name, writer, description }: Book, context, info) {
      return bookRepository.create({ name, writer, description });
    },
  },
  editUser: {
    type: UserType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      writer: { type: new GraphQLNonNull(GraphQLString) },
      status: { type: new GraphQLNonNull(GraphQLBoolean) },
      description: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve(parentValue, { name, writer, status, description }: Book, context, info) {
      return bookRepository.update({ name, writer, status, description });
    },
  },
  deleteUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
    },
    resolve(parentValue, { id }: Book, context, info) {
      return bookRepository.delete({id});
    },
  },
}

export default bookkMutation;
