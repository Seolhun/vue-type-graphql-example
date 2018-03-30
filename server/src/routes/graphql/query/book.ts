import { GraphQLFieldConfigMap, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType } from '../type/index';

import { Book } from '../../../model';
import { BookService } from '../../../services/BookService';

const book_service = new BookService();
const BookQuery: GraphQLFieldConfigMap<any, any> = {
  book: {
    type: BookType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, { id }: Book, context, info) {
      return book_service.findOne({id});
    },
  },
  books: {
    type: new GraphQLList(BookType),
    resolve(parent, args, context, info) {
      return book_service.findAll('DESC');
    },
  },
};

export { BookQuery };
