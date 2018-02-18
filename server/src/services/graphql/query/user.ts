import { GraphQLFieldConfigMap, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { UserType } from '../type/index';

import { User, UserRepository } from '../../../repository/user/UserRepository';
const userRepository = new UserRepository();

const UserQuery: GraphQLFieldConfigMap<any, any> = {
  user: {
    type: UserType,
    args: {
      id: { type: GraphQLString },
      email: { type: GraphQLString },
    },
    resolve(parentValue, { id, email }: User, context, info) {
      if (!id && !email) {
        return new Error('id or email is requirement.');
      }
      return userRepository.findOne({ id, email });
    },
  },
  users: {
    type: new GraphQLList(UserType),
    args: {},
    async resolve(parentValue, args, context, info) {
      return userRepository.findAll('DESC');
    },
  },
};

export default UserQuery;
