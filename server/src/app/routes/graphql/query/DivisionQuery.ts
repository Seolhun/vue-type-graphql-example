import { GraphQLFieldConfigMap, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { DivisionType } from '../type/index';

import { DivisionService } from '../../../services';
import { Division } from '../../../types';

const division_service = new DivisionService();
const DivisionQuery: GraphQLFieldConfigMap<any, any> = {
  division: {
    type: DivisionType,
    args: {
      id: { type: GraphQLString },
      name: { type: GraphQLString },
    },
    resolve(parent, { id, name }: Division, context, info) {
      return division_service.findOne({ id, name });
    },
  },
  divisions: {
    type: new GraphQLList(DivisionType),
    resolve(parent, args, context, info) {
      return division_service.findAll('DESC');
    },
  },
};

export { DivisionQuery };
