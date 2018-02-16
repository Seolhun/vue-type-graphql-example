import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLFieldConfigMap } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType, DivisionType, UserType } from '../type/index';

import { Division, DivisionRepository } from '../../../repository/division/DivisionRepository';
const divisionRepository = new DivisionRepository();

const divisionQuery:GraphQLFieldConfigMap<any, any> = {
  division: {
    type: DivisionType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parentValue, { id }: Division, context, info) {
      return divisionRepository.findOne({ id });
    },
  },
  divisions: {
    type: new GraphQLList(DivisionType),
    resolve(parentValue, args, context, info) {
      return divisionRepository.findAll('DESC')
    },
  },
}

export default divisionQuery;
