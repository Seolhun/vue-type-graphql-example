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
    },
    resolve(parent, { id, email }: User, context, info) {
      if (!id && !email) {
        return new Error('id or email is requirement.');
      }

      const user = userRepository.findOne({ id, email });
      user.then((user: User) => {
        const division = divisionRepository.findOne({ id: user.division_id });
        division.then((division: Division) => {
          if (division) {
            user.division = division;
          }
        });
      });
      return user;
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
