import { GraphQLFieldConfigMap, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType, DivisionType, UserType } from '../type/index';

import { Division, DivisionRepository } from '../../../repository/division/DivisionRepository';
const divisionRepository = new DivisionRepository();

const DivisionMutation: GraphQLFieldConfigMap<any, any> = {
  addDivision: {
    type: DivisionType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, { name, description }: Division, context, info) {
      return divisionRepository.create({ name, description });
    },
  },
  editDivision: {
    type: DivisionType,
    args: {
      id: { type: GraphQLInt },
      name: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, { id, name, description }: Division, context, info) {
      if (!id && !name) {
        return new Error('id or name is requirement.');
      }
      const dbDivision = divisionRepository.findOne({ id, name });
      if (!dbDivision) {
        return new Error('The division is not found');
      }
      return divisionRepository.update({ name, description });
    },
  },
  deleteDivision: {
    type: DivisionType,
    args: {
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
    },
    resolve(parent, { id, name }: Division, context, info) {
      if (!id && !name) {
        return new Error('id or name is requirement.');
      }
      const dbDivision = divisionRepository.findOne({ id, name });
      if (!dbDivision) {
        return new Error('The division is not found');
      }
      return divisionRepository.delete({ id });
    },
  },
};

export default DivisionMutation;
