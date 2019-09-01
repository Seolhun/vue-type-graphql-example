import { Book } from "../types";
import { BookRepository } from "./repository";
import { Order } from "./repository/AbstractRepository";
import { BookModel } from "./model";

const book_repository = new BookRepository(["id"]);
class BookService {
  createdBook({ name, author, description }: Book): Promise<BookModel> {
    const book = book_repository.create({ name, author, description });
    return book;
  }

  findOne({ id }: Book): Promise<BookModel | null> {
    if (!id) {
      return Promise.reject(new Error("id is requirement."));
    }
    return book_repository.findOne({ id });
  }

  findAll(order: Order): Promise<BookModel[]> {
    return book_repository.findAll(order);
  }

  updatedBook({
    id,
    name,
    author,
    status,
    description
  }: Book): Promise<boolean> {
    if (!id) {
      return Promise.reject(new Error("id is requirement."));
    }
    const dbBook = book_repository.findOne({ id });
    if (!dbBook) {
      return Promise.reject(new Error("The book is not found"));
    }
    return book_repository.update({ name, author, status, description });
  }

  deletedBook({ id }: Book): Promise<boolean> {
    if (!id) {
      return Promise.reject(new Error("id is requirement."));
    }
    const dbBook = book_repository.findOne({ id });
    if (!dbBook) {
      return Promise.reject(new Error("The division is not found"));
    }
    return book_repository.delete({ id });
  }
}

export { BookService };
