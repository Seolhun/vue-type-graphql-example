import { GraphQLFieldConfigMap, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType, DivisionType, UserType } from '../type/index';

import { User } from '../../../model';
import { DivisionRepository } from '../../../repository/division/DivisionRepository';
import { UserRepository } from '../../../repository/user/UserRepository';

const divisionRepositroy = new DivisionRepository();
const userRepository = new UserRepository();

const UserMutation: GraphQLFieldConfigMap<any, any> = {
  addUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      birth: { type: new GraphQLNonNull(GraphQLString) },
      division_id: { type: new GraphQLNonNull(GraphQLInt) },
    },
    async resolve(parent, { email, birth, name, division_id }: User, context, info) {
      if (!email && !name) {
        return new Error('One of email, name is requirement.');
      }

      const dbUser = await userRepository.findOne({ email, name });
      if (dbUser) {
        if (email && dbUser.email === email) {
          return new Error(`Already '${email}' is existed.`);
        } else if (name && dbUser.name === name) {
          return new Error(`Already '${name}' is existed.`);
        }
        return new Error(`Already '${email || name}' is existed.`);
      }

      const created_user: User = await userRepository.create({ email, birth, name, division_id });
      const dbDivision = await divisionRepositroy.findOne({ id: division_id });
      created_user.division = dbDivision ? dbDivision : {};

      return created_user;
    },
  },
  editUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
      name: { type: GraphQLString },
      birth: { type: GraphQLString },
      division: { type: GraphQLInt },
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
