import { GraphQLFieldConfigMap, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType } from '../type/index';

import { BookService } from '../../../services';
import { Book } from '../../../types';

const book_service = new BookService();
const BookMutation: GraphQLFieldConfigMap<any, any> = {
  addUser: {
    type: BookType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      author: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLInt) },
    },
    async resolve(parent, { name, author, description }: Book, context, info) {
      return await book_service.createdBook({ name, author, description });
    },
  },
  editUser: {
    type: BookType,
    args: {
      id: { type: GraphQLInt },
      name: { type: new GraphQLNonNull(GraphQLString) },
      author: { type: new GraphQLNonNull(GraphQLString) },
      status: { type: new GraphQLNonNull(GraphQLBoolean) },
      description: { type: new GraphQLNonNull(GraphQLInt) },
    },
    async resolve(parent, { id, name, author, status, description }: Book, context, info) {
      return await book_service.updatedBook({ id, name, author, status, description });
    },
  },
  deleteUser: {
    type: BookType,
    args: {
      id: { type: GraphQLInt },
    },
    async resolve(parent, { id }: Book, context, info) {
      return await book_service.deletedBook({id});
    },
  },
};

export { BookMutation };
