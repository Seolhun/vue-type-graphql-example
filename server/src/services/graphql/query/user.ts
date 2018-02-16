import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLFieldConfigMap } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType, DivisionType, UserType } from '../type/index';

import { User, UserRepository} from '../../../repository/user/UserRepository';
const userRepository = new UserRepository();

const userQuery:GraphQLFieldConfigMap<any, any> = {
  user: {
    type: UserType,
    args: {
      id: { type: GraphQLString },
      email: { type: GraphQLString },
    },
    resolve(parentValue, { id, email }: User, context, info) {
      return userRepository.findOne({ id, email });
    },
  },
  users: {
    type: new GraphQLList(UserType),
    async resolve(parentValue, args, context, info) {
      return userRepository.findAll('DESC')
    },
  },
}

export default userQuery;
