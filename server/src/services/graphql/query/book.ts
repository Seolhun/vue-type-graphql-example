import { GraphQLFieldConfigMap, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType } from '../type/index';

import { Book, BookRepository } from '../../../repository/book/BookRepository';
const bookRepository = new BookRepository();

const bookQuery: GraphQLFieldConfigMap<any, any> = {
  book: {
    type: BookType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parentValue, { id }: Book, context, info) {
      if (!id) {
        return new Error('id is requirement.');
      }
      return bookRepository.findOne({ id });
    },
  },
  books: {
    type: new GraphQLList(BookType),
    resolve(parentValue, args, context, info) {
      return bookRepository.findAll('DESC');
    },
  },
};

export default bookQuery;
