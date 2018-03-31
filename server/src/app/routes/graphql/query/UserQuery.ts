import { GraphQLFieldConfigMap, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { UserType } from '../type/index';

import { UserService } from '../../../services';
import { Division, User } from '../../../types';

const user_service = new UserService();
const UserQuery: GraphQLFieldConfigMap<any, any> = {
  user: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
      name: { type: GraphQLString },
    },
    async resolve(parent, { id, email, name }: User, context, info) {
      return await user_service.findOne({ id, email, name });
    },
  },
  users: {
    type: new GraphQLList(UserType),
    async resolve(parent, args, context, info) {
      return await user_service.findAll('DESC');
    },
  },
};

export { UserQuery };
