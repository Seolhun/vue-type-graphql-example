import { GraphQLObjectType } from "graphql";

import { AuthorityMutation } from "./AuthorityMutation";
import { BookMutation } from "./BookMutation";
import { DivisionMutation } from "./DivisionMutation";
import { UserMutation } from "./UserMutation";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...AuthorityMutation,
    ...BookMutation,
    ...DivisionMutation,
    ...UserMutation
  }
});

export { mutation };
