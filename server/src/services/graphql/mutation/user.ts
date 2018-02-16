import { GraphQLNonNull, GraphQLObjectType, GraphQLFieldConfigMap } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType, DivisionType, UserType } from '../type/index';

import { User, UserRepository } from '../../../repository/user/UserRepository';
const userRepository = new UserRepository();

const userMutation:GraphQLFieldConfigMap<any, any> = {
  addUser: {
    type: UserType,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      birth: { type: new GraphQLNonNull(GraphQLString) },
      division: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve(parentValue, { email, birth, name, division }: User, context, info) {
      return userRepository.create({ email, birth, name, division });
    },
  },
  editUser: {
    type: UserType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      birth: { type: new GraphQLNonNull(GraphQLString) },
      division: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve(parentValue, { birth, name, division }: User) {
      return userRepository.update({ birth, name, division });
    },
  },
  deleteUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
    },
    resolve(parentValue, { id, email }: User) {
      return userRepository.delete({id, email});
    },
  },
}

export default userMutation;
