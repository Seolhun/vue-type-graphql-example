import * as Sequelize from 'sequelize';
import { sequelize } from '../database';
import DivisionModel from './BookModel';

import AbstractRepository from '../abstract/AbstractRepository';

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

class BookRepository implements AbstractRepository<Book> {
  async create(book: Book) {
    const created = await DivisionModel.create(book);
    return created;
  }
  async findAllByIds([]: Book[]) {
    throw new Error('Method not implemented.');
  }
  async findOneById({ id }: Book) {
    const created = await DivisionModel.findById(id);
    return created;
  }
  async updateById(book: Book) {
    const created = await DivisionModel.update(book, { where: { book } });
    return created;
  }
  async deleteById({ id }: Book) {
    throw new Error('Method not implemented.');
  }
}

export { BookRepository, Book };
