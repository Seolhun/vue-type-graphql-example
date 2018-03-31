import { GraphQLFieldConfigMap, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { UserType } from '../type/index';

import { DivisionService, UserService } from '../../../services';
import { User } from '../../../types';

const division_service = new DivisionService();
const user_service = new UserService();

const UserMutation: GraphQLFieldConfigMap<any, any> = {
  addUser: {
    type: UserType,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
      birth: { type: new GraphQLNonNull(GraphQLString) },
      division_id: { type: new GraphQLNonNull(GraphQLInt) },
    },
    async resolve(parent, { email, password, birth, name, division_id }: User, context, info) {
      return await user_service.createdUser({ email, birth, name, division_id });
    },
  },
  editUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
      name: { type: GraphQLString },
      password: { type: new GraphQLNonNull(GraphQLString) },
      birth: { type: GraphQLString },
      division: { type: GraphQLInt },
    },
    async resolve(parent, { id, email, password, birth, name, division_id }: User) {
      return await user_service.updatedUser({ id, email, password, birth, name, division_id });
    },
  },
  deleteUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
    },
    async resolve(parent, { id, email, password }: User) {
      return await user_service.deletedUser({ id, email, name, password });
    },
  },
};

export { UserMutation };
