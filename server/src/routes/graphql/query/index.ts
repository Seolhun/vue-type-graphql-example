import { graphql, GraphQLSchema, printSchema } from 'graphql';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLString } from 'graphql/type/scalars';

import BookQuery from './book';
import DivisionQuery from './division';
import UserQuery from './user';

const query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    ...BookQuery,
    ...DivisionQuery,
    ...UserQuery,
  },
});

export default query;
