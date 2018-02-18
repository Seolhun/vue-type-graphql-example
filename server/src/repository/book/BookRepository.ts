import * as Sequelize from 'sequelize';
import { sequelize } from '../database';
import BookModel from './BookModel';

import * as ar from '../abstract/AbstractRepository';

interface Book {
  id?: number;
  name?: string;
  writer?: string;
  status?: boolean;
  description?: string;

  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

class BookRepository extends ar.AbstractRepository<Book> {
  async create(book: Book): Promise<Book> {
    const dbBook = await BookModel.create(book);
    return dbBook;
  }

  async findOne(book: Book): Promise<Book | null> {
    const data = this.getUniqueCriteria(book, ['id']);
    const dbUbook = await BookModel.findOne({
      where: data,
    });
    return dbUbook;
  }

  async findAll(order?: ar.Order): Promise<Book[]> {
    if (!order) {
      order = 'DESC';
    }
    const dbDivisions: Book[] = await BookModel.findAll({
      order: [
        ['created_at', order],
      ],
    });
    return dbDivisions;
  }

  async findAllByPaging(books: Book[], offset?: number | 0, limit?: number | 20, order?: ar.Order): Promise<Book[]> {
    if (!order) {
      order = 'DESC';
    }
    const dbBooks: Book[] = await BookModel.findAll({
      offset,
      limit,
      where: books,
      order: [
        ['created_at', order],
      ],
    });
    return dbBooks;
  }

  async findAllByIds(ids: number[], order?: ar.Order): Promise<Book[]> {
    if (!order) {
      order = 'DESC';
    }
    const dbBooks: Book[] = await BookModel.findAll({
      where: {
        id: [...ids],
      },
      order: [BookModel, 'created_at', order],
    });
    return dbBooks;
  }

  async update(book: Book): Promise<Book | boolean> {
    const data = this.getUniqueCriteria(book, ['id']);
    try {
      await BookModel.update(book, {
        where: data,
      });
    } catch (error) {
      return false;
    }
    return true;
  }

  async delete(book: Book): Promise<Book | boolean> {
    const data = this.getUniqueCriteria(book, ['id']);
    try {
      await BookModel.destroy({
        where: data,
      });
    } catch (error) {
      return false;
    }
    return true;
  }
}

export { BookRepository, Book };
