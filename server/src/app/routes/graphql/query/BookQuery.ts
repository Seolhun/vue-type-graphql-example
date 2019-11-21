import { GraphQLFieldConfigMap, GraphQLList, GraphQLNonNull } from "graphql";
import { GraphQLInt } from "graphql/type/scalars";
import { BookType } from "../type/index";

import { BookService } from "../../../services";
import { Book } from "../../../types";

const book_service = new BookService();
const BookQuery: GraphQLFieldConfigMap<any, any> = {
  book: {
    type: BookType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) }
    },
    async resolve(parent, { id }: Book, context, info) {
      return await book_service.findOne({ id });
    }
  },
  books: {
    type: new GraphQLList(BookType),
    async resolve(parent, args, context, info) {
      return await book_service.findAll("DESC");
    }
  }
};

export { BookQuery };
