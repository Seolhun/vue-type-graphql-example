import { GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLID, GraphQLInt, GraphQLString } from 'graphql/type/scalars';

export const DivisionType = new GraphQLObjectType({
  name: 'Division',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    registered_date: { type: GraphQLString },
  },
});

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    age: { type: GraphQLInt },
    name: { type: GraphQLString },
    registered_date: { type: GraphQLString },
    division: { type: DivisionType },
  },
});

export const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    writer: { type: GraphQLString },
    status: { type: GraphQLBoolean },
    description: { type: GraphQLString },
    registered_date: { type: GraphQLString },
  },
});
