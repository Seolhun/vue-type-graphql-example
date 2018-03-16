import { GraphQLFieldConfigMap, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { UserType } from '../type/index';

import { Division, User } from '../../../model';
import { DivisionRepository } from '../../../repository/division/DivisionRepository';
import { UserRepository } from '../../../repository/user/UserRepository';

const userRepository = new UserRepository();
const divisionRepository = new DivisionRepository();

const UserQuery: GraphQLFieldConfigMap<any, any> = {
  user: {
    type: UserType,
    args: {
      id: { type: GraphQLString },
      email: { type: GraphQLString },
      name: { type: GraphQLString },
    },
    async resolve(parent, { id, email, name }: User, context, info) {
      if (!id && !email && !name) {
        return new Error('One of id and email, name is requirement.');
      }

      const dbUser = await userRepository.findOne({ id, email, name });
      return dbUser;
    },
  },
  users: {
    type: new GraphQLList(UserType),
    args: {},
    async resolve(parent, args, context, info) {
      return userRepository.findAll('DESC');
    },
  },
};

export default UserQuery;
