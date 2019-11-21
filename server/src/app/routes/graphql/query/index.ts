import { GraphQLObjectType } from "graphql";

import { AuthorityQuery } from "./AuthorityQuery";
import { BookQuery } from "./BookQuery";
import { DivisionQuery } from "./DivisionQuery";
import { UserQuery } from "./UserQuery";

const query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    ...AuthorityQuery,
    ...BookQuery,
    ...DivisionQuery,
    ...UserQuery
  }
});

export { query };
