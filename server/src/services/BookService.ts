import Bluebird from 'bluebird';
import { Book } from '../model';
import { Order } from '../repository/AbstractRepository';
import { BookRepository } from '../repository/book/BookRepository';

const book_repository = new BookRepository();
class BookService {
  createdBook({ name, writer, description }: Book): Bluebird<Book>  {
    const book = book_repository.create({ name, writer, description });
    return book;
  }

  findOne({ id }: Book): Bluebird<Book | null> {
    if (!id) {
      return Bluebird.reject(new Error('id is requirement.'));
    }
    return book_repository.findOne({ id });
  }

  findAll(order: Order): Bluebird<Book[]> {
    return book_repository.findAll(order);
  }

  updatedBook({ id, name, writer, status, description }: Book): Bluebird<boolean> {
    if (!id) {
      return Bluebird.reject(new Error('id is requirement.'));
    }
    const dbBook = book_repository.findOne({ id });
    if (!dbBook) {
      return Bluebird.reject(new Error('The book is not found'));
    }
    return book_repository.update({ name, writer, status, description });
  }

  deletedBook({ id }: Book): Bluebird<boolean> {
    if (!id) {
      return Bluebird.reject(new Error('id is requirement.'));
    }
    const dbBook = book_repository.findOne({ id });
    if (!dbBook) {
      return Bluebird.reject(new Error('The division is not found'));
    }
    return book_repository.delete({ id });
  }
}

export { BookService };
