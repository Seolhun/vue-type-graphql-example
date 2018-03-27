import { GraphQLFieldConfigMap, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { UserType } from '../type/index';

import { Division, User } from '../../../model';
import { UserService } from '../../../services';

const user_service = new UserService();
const UserQuery: GraphQLFieldConfigMap<any, any> = {
  user: {
    type: UserType,
    args: {
      id: { type: GraphQLString },
      email: { type: GraphQLString },
      name: { type: GraphQLString },
    },
    async resolve(parent, { id, email, name }: User, context, info) {
      return user_service.findOne({ id, email, name });
    },
  },
  users: {
    type: new GraphQLList(UserType),
    async resolve(parent, args, context, info) {
      return user_service.findAll('DESC');
    },
  },
};

export default UserQuery;
