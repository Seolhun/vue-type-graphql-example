import { GraphQLFieldConfigMap, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType, DivisionType, UserType } from '../type/index';

import { User, UserRepository } from '../../../repository/user/UserRepository';
const userRepository = new UserRepository();

const UserMutation: GraphQLFieldConfigMap<any, any> = {
  addUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
      name: { type: new GraphQLNonNull(GraphQLString) },
      birth: { type: new GraphQLNonNull(GraphQLString) },
      division: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve(parent, { id, email, birth, name, division }: User, context, info) {
      if (!id && !email) {
        return new Error('id or email is requirement.');
      }
      const dbUser = userRepository.findOne({ id, email });
      if (dbUser) {
        return new Error(`Already '${email}' is existed.`);
      }
      return userRepository.create({ email, birth, name, division });
    },
  },
  editUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
      name: { type: new GraphQLNonNull(GraphQLString) },
      birth: { type: new GraphQLNonNull(GraphQLString) },
      division: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve(parent, { id, email, birth, name, division }: User) {
      if (!id && !email) {
        return new Error('id or email is requirement.');
      }
      const dbUser = userRepository.findOne({ id, email });
      if (!dbUser) {
        return new Error('The user is not found');
      }
      return userRepository.update({ birth, name, division });
    },
  },
  deleteUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
    },
    resolve(parent, { id, email }: User) {
      if (!id && !email) {
        return new Error(`id or email is requirement.`);
      }
      const dbUser = userRepository.findOne({ id, email });
      if (!dbUser) {
        return new Error('The user is not found');
      }
      return userRepository.delete({ id, email });
    },
  },
};

export default UserMutation;
