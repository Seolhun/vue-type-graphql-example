import { GraphQLFieldConfigMap, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType, DivisionType, UserType } from '../type/index';

import { Division } from '../../../model';
import { DivisionService } from '../../../services/DivisionService';

const division_service = new DivisionService();
const DivisionMutation: GraphQLFieldConfigMap<any, any> = {
  addDivision: {
    type: DivisionType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: GraphQLString },
    },
    async resolve(parent, { name, description }: Division, context, info) {
      return await division_service.createdDivision({ name, description });
    },
  },
  editDivision: {
    type: DivisionType,
    args: {
      id: { type: GraphQLInt },
      name: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent, { id, name, description }: Division, context, info) {
      return await division_service.updatedDivision({ name, description });
    },
  },
  deleteDivision: {
    type: DivisionType,
    args: {
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
    },
    async resolve(parent, { id, name }: Division, context, info) {
      return await division_service.deletedDivision({ id });
    },
  },
};

export default DivisionMutation;
