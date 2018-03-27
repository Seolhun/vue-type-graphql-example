import { GraphQLFieldConfigMap, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { BookType, DivisionType, UserType } from '../type/index';

import { User } from '../../../model';
import { DivisionService } from '../../../services/DivisionService';
import { UserService } from '../../../services/UserService';

const division_service = new DivisionService();
const user_service = new UserService();

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
      return user_service.createdUser({ email, birth, name, division_id });
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
    resolve(parent, { id, email, birth, name, division_id }: User) {
      return user_service.updatedUser({ id, email, birth, name, division_id });
    },
  },
  deleteUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
    },
    resolve(parent, { id, email }: User) {
      return user_service.deletedUser({ id, email, name });
    },
  },
};

export default UserMutation;
