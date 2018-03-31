import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType, DivisionType, UserType } from '../type/index';

import { AuthorityMutation } from './AuthorityMutation';
import { BookMutation } from './BookMutation';
import { DivisionMutation } from './DivisionMutation';
import { UserMutation } from './UserMutation';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...AuthorityMutation,
    ...BookMutation,
    ...DivisionMutation,
    ...UserMutation,
  },
});

export { mutation };
