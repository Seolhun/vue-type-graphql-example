import { GraphQLNonNull, GraphQLObjectType, GraphQLFieldConfigMap } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType, DivisionType, UserType } from '../type/index';

import { Division, DivisionRepository } from '../../../repository/division/DivisionRepository';
const divisionRepository = new DivisionRepository();

const divisionMutation:GraphQLFieldConfigMap<any, any> = {
  addUser: {
    type: UserType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parentValue, { name, description }: Division, context, info) {
      return divisionRepository.create({ name, description });
    },
  },
  editUser: {
    type: UserType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parentValue, { name, description }: Division, context, info) {
      return divisionRepository.update({ name, description });
    },
  },
  deleteUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
    },
    resolve(parentValue, { id }: Division, context, info) {
      return divisionRepository.delete({id});
    },
  },
}

export default divisionMutation;
