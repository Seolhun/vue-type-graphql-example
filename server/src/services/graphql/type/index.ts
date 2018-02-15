import { GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';

export const DivisionType = new GraphQLObjectType({
  name: 'Division',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },

    createdAt: { type: GraphQLString },
    deletedAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
});

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    birth: { type: GraphQLString },
    division: { type: DivisionType },
    active: { type: GraphQLBoolean },

    created_at: { type: GraphQLString },
    deleted_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
  },
});

export const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    writer: { type: GraphQLString },
    status: { type: GraphQLBoolean },
    description: { type: GraphQLString },

    created_at: { type: GraphQLString },
    deleted_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
  },
});
