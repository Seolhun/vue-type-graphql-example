import { GraphQLList, GraphQLObjectType } from "graphql";
import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLString
} from "graphql/type/scalars";

const AuthorityType = new GraphQLObjectType({
  name: "Authority",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    level: { type: GraphQLInt },

    active: { type: GraphQLBoolean },
    created_at: { type: GraphQLString },
    deleted_at: { type: GraphQLString },
    updated_at: { type: GraphQLString }
  }
});

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    author: { type: GraphQLString },
    status: { type: GraphQLBoolean },
    description: { type: GraphQLString },

    active: { type: GraphQLBoolean },
    created_at: { type: GraphQLString },
    deleted_at: { type: GraphQLString },
    updated_at: { type: GraphQLString }
  }
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    birth: { type: GraphQLString },

    borrowed_books: { type: new GraphQLList(BookType) },

    active: { type: GraphQLBoolean },
    created_at: { type: GraphQLString },
    deleted_at: { type: GraphQLString },
    updated_at: { type: GraphQLString }
  }
});

const DivisionType = new GraphQLObjectType({
  name: "Division",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },

    employees: { type: new GraphQLList(UserType) },

    active: { type: GraphQLBoolean },
    created_at: { type: GraphQLString },
    deleted_at: { type: GraphQLString },
    updated_at: { type: GraphQLString }
  }
});

export { AuthorityType, BookType, DivisionType, UserType };
