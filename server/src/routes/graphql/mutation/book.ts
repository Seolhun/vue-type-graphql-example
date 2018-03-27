import Bluebird from 'bluebird';
import { GraphQLFieldConfigMap, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType } from '../type/index';

import { Book } from '../../../model';
import { BookService } from '../../../services/BookService';

const book_service = new BookService();
const BookkMutation: GraphQLFieldConfigMap<any, any> = {
  addUser: {
    type: BookType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      writer: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve(parent, { name, writer, description }: Book, context, info): Bluebird<Book> {
      return book_service.createdBook({ name, writer, description });
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
    resolve(parent, { id, name, writer, status, description }: Book, context, info): Bluebird<boolean> {
      return book_service.updatedBook({ id, name, writer, status, description });
    },
  },
  deleteUser: {
    type: BookType,
    args: {
      id: { type: GraphQLInt },
    },
    resolve(parent, { id }: Book, context, info): Bluebird<boolean> {
      return book_service.deletedBook({id});
    },
  },
};

export default BookkMutation;
