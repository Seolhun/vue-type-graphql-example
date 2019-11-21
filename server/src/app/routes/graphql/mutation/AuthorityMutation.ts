import { GraphQLFieldConfigMap, GraphQLNonNull } from "graphql";
import { GraphQLInt, GraphQLString } from "graphql/type/scalars";
import { AuthorityType } from "../type/index";

import { AuthorityService } from "../../../services";
import { Authority } from "../../../types";

const authority_service = new AuthorityService();

const AuthorityMutation: GraphQLFieldConfigMap<any, any> = {
  addAuthority: {
    type: AuthorityType,
    args: {
      id: { type: GraphQLInt },
      name: { type: new GraphQLNonNull(GraphQLString) },
      level: { type: new GraphQLNonNull(GraphQLInt) }
    },
    async resolve(
      parent,
      { name, level, description }: Authority,
      context,
      info
    ) {
      return await authority_service.createdAuthority({
        name,
        level,
        description
      });
    }
  },
  editAuthority: {
    type: AuthorityType,
    args: {
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      level: { type: GraphQLInt }
    },
    async resolve(parent, { name, level, description }: Authority) {
      return await authority_service.updatedAuthority({
        name,
        level,
        description
      });
    }
  },
  deleteAuthority: {
    type: AuthorityType,
    args: {
      id: { type: GraphQLInt },
      name: { type: GraphQLString }
    },
    async resolve(parent, { id, name }: Authority) {
      return await authority_service.deletedAuthority({ id, name });
    }
  }
};

export { AuthorityMutation };
