import { GraphQLFieldConfigMap, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType } from '../type/index';

import { Book } from '../../../model';
import { BookRepository } from '../../../repository/book/BookRepository';
const bookRepository = new BookRepository();

const BookQuery: GraphQLFieldConfigMap<any, any> = {
  book: {
    type: BookType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, { id }: Book, context, info) {
      if (!id) {
        return new Error('id is requirement.');
      }
      return bookRepository.findOne({ id });
    },
  },
  books: {
    type: new GraphQLList(BookType),
    resolve(parent, args, context, info) {
      return bookRepository.findAll('DESC');
    },
  },
};

export default BookQuery;
