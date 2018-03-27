import Bluebird from 'bluebird';
import * as Sequelize from 'sequelize';
import { BookModel } from './BookModel';

import { Book } from '../../model';
import { AbstractRepository, Order } from '../AbstractRepository';

class BookRepository extends AbstractRepository<Book> {
  create(book: Book): Bluebird<Book> {
    return BookModel.create(book);
  }

  findOne(book: Book): Bluebird<Book | null> {
    const data = this.getUniqueCriteria(book, ['id']);
    return BookModel.findOne({
      where: {
        [Sequelize.Op.or]: data,
      },
    });

  }

  findAll(order?: Order): Bluebird<Book[]> {
    if (!order) {
      order = 'DESC';
    }
    return BookModel.findAll({
      order: [
        ['created_at', order],
      ],
    });
  }

  findAllByPaging(book: Book, offset?: number | 0, limit?: number | 20, order?: Order): Bluebird<Book[]> {
    if (!order) {
      order = 'DESC';
    }
    return BookModel.findAll({
      offset,
      limit,
      where: book,
      order: [
        ['created_at', order],
      ],
    });
  }

  findAllByIds(ids: number[], order?: Order): Bluebird<Book[]> {
    if (!order) {
      order = 'DESC';
    }
    const db_books: Bluebird<Book[]> = BookModel.findAll({
      where: {
        id: [...ids],
      },
      order: [
        ['created_at', order],
      ],
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
