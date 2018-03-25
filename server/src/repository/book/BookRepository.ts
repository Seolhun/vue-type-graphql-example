import Bluebird from 'bluebird';
import * as Sequelize from 'sequelize';
import { BookModel } from './BookModel';

import { Book } from '../../model';
import * as abstracts from '../AbstractRepository';

class BookRepository extends abstracts.AbstractRepository<Book> {
  create(book: Book): Bluebird<Book> {
    const db_book: Bluebird<Book> = BookModel.create(book);
    return Bluebird.Promise.resolve(db_book);
  }

  findOne(book: Book): Bluebird<Book | null> {
    const data = this.getUniqueCriteria(book, ['id']);
    const db_book: Bluebird<Book | null> = BookModel.findOne({
      where: {
        [Sequelize.Op.or]: data,
      },
    });

    return Bluebird.Promise.resolve(db_book);
  }

  findAll(order?: abstracts.Order): Bluebird<Book[]> {
    if (!order) {
      order = 'DESC';
    }
    const db_books: Bluebird<Book[]> = BookModel.findAll({
      order: [
        ['created_at', order],
      ],
    });
    return Bluebird.Promise.resolve(db_books);
  }

  findAllByPaging(book: Book, offset?: number | 0, limit?: number | 20, order?: abstracts.Order): Bluebird<Book[]> {
    if (!order) {
      order = 'DESC';
    }
    const db_books: Bluebird<Book[]> = BookModel.findAll({
      offset,
      limit,
      where: book,
      order: [
        ['created_at', order],
      ],
    });
    return Bluebird.Promise.resolve(db_books);
  }

  findAllByIds(ids: number[], order?: abstracts.Order): Bluebird<Book[]> {
    if (!order) {
      order = 'DESC';
    }
    const db_books: Bluebird<Book[]> = BookModel.findAll({
      where: {
        id: [...ids],
      },
      order: [BookModel, 'created_at', order],
    });
    return Bluebird.Promise.resolve(db_books);
  }

  update(book: Book): Bluebird<boolean> {
    const data = this.getUniqueCriteria(book, ['id']);
    try {
      BookModel.update(book, {
        where: {
          [Sequelize.Op.or]: data,
        },
      });
    } catch (error) {
      return Bluebird.Promise.resolve(false);
    }
    return Bluebird.Promise.resolve(true);
  }

  delete(book: Book): Bluebird<boolean> {
    const data = this.getUniqueCriteria(book, ['id']);
    try {
      BookModel.destroy({
        where: {
          [Sequelize.Op.or]: data,
        },
      });
    } catch (error) {
      return Bluebird.Promise.resolve(false);
    }
    return Bluebird.Promise.resolve(true);
  }
}

export { BookRepository };
