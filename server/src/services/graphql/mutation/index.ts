import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType, DivisionType, UserType } from '../type/index';

import { Book, BookRepository } from '../../../repository/book/BookRepository';
import { Division, DivisionRepository } from '../../../repository/division/DivisionRepository';

import bookMutation from './book';
import divisionMutation from './division';
import userMutation from './user';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...bookMutation,
    ...divisionMutation,
    ...userMutation,
  },
});

export default mutation;
