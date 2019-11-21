import { GraphQLFieldConfigMap, GraphQLList } from "graphql";
import { GraphQLInt, GraphQLString } from "graphql/type/scalars";
import { DivisionType } from "../type/index";

import { DivisionService } from "../../../services";
import { Division } from "../../../types";

const division_service = new DivisionService();
const DivisionQuery: GraphQLFieldConfigMap<any, any> = {
  division: {
    type: DivisionType,
    args: {
      id: { type: GraphQLInt },
      name: { type: GraphQLString }
    },
    async resolve(parent, { id, name }: Division, context, info) {
      return await division_service.findOne({ id, name });
    }
  },
  divisions: {
    type: new GraphQLList(DivisionType),
    async resolve(parent, args, context, info) {
      return await division_service.findAll("DESC");
    }
  }
};

export { DivisionQuery };
