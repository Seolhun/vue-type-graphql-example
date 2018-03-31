import { graphql, GraphQLSchema, printSchema } from 'graphql';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLString } from 'graphql/type/scalars';

import { AuthorityQuery } from './AuthorityQuery';
import { BookQuery } from './BookQuery';
import { DivisionQuery } from './DivisionQuery';
import { UserQuery } from './UserQuery';

const query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    ...AuthorityQuery,
    ...BookQuery,
    ...DivisionQuery,
    ...UserQuery,
  },
});

export { query };
