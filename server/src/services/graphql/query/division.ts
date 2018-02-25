import { GraphQLFieldConfigMap, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { DivisionType } from '../type/index';

import { Division } from '../../../model';
import { DivisionRepository } from '../../../repository/division/DivisionRepository';
const divisionRepository = new DivisionRepository();

const DivisionQuery: GraphQLFieldConfigMap<any, any> = {
  division: {
    type: DivisionType,
    args: {
      id: { type: GraphQLString },
      name: { type: GraphQLString },
    },
    resolve(parent, { id, name }: Division, context, info) {
      if (!id && !name) {
        return new Error('id or name is requirement.');
      }
      return divisionRepository.findOne({ id, name });
    },
  },
  divisions: {
    type: new GraphQLList(DivisionType),
    resolve(parent, args, context, info) {
      return divisionRepository.findAll('DESC');
    },
  },
};

export default DivisionQuery;
