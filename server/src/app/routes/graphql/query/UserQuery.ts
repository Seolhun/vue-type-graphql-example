import { GraphQLFieldConfigMap, GraphQLList } from "graphql";
import { GraphQLInt, GraphQLString } from "graphql/type/scalars";
import { User } from "app/types";

import { UserService } from "../../../services";
import { UserType } from "../type";

const user_service = new UserService();
const UserQuery: GraphQLFieldConfigMap<any, any> = {
  user: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
      name: { type: GraphQLString }
    },
    async resolve(parent, { id, email, name }: User, context, info) {
      const db_user = await user_service.findOne({ id, email, name });
      return db_user;
    }
  },
  users: {
    type: new GraphQLList(UserType),
    async resolve(parent, args, context, info) {
      const users = await user_service.findAll("DESC");
      return users;
    }
  }
};

export { UserQuery };
