import { graphql, GraphQLSchema, printSchema } from 'graphql';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLString } from 'graphql/type/scalars';

import bookQuery from './book';
import divisionQuery from './division';
import userQuery from './user';

const query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    ...bookQuery,
    ...divisionQuery,
    ...userQuery,
  },
});

export default query;
