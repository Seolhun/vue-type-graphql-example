import { GraphQLFieldConfigMap, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType } from '../type/index';

import { Book, BookRepository } from '../../../repository/book/BookRepository';
const bookRepository = new BookRepository();

const BookkMutation: GraphQLFieldConfigMap<any, any> = {
  addUser: {
    type: BookType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      writer: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve(parent, { name, writer, description }: Book, context, info) {
      return bookRepository.create({ name, writer, description });
    },
  },
  editUser: {
    type: BookType,
    args: {
      id: { type: GraphQLInt },
      name: { type: new GraphQLNonNull(GraphQLString) },
      writer: { type: new GraphQLNonNull(GraphQLString) },
      status: { type: new GraphQLNonNull(GraphQLBoolean) },
      description: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve(parent, { id, name, writer, status, description }: Book, context, info) {
      if (!id) {
        return new Error('id is requirement.');
      }
      const dbBook = bookRepository.findOne({ id });
      if (!dbBook) {
        return new Error('The division is not found');
      }
      return bookRepository.update({ name, writer, status, description });
    },
  },
  deleteUser: {
    type: BookType,
    args: {
      id: { type: GraphQLInt },
    },
    resolve(parent, { id }: Book, context, info) {
      if (!id) {
        return new Error('id is requirement.');
      }
      const dbBook = bookRepository.findOne({ id });
      if (!dbBook) {
        return new Error('The division is not found');
      }
      return bookRepository.delete({ id });
    },
  },
};

export default BookkMutation;
