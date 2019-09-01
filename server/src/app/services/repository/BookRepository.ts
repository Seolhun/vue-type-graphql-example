import { Op } from "sequelize";

import { Book } from "../../types";
import { BookModel } from "../model";
import { AbstractRepository, Order } from "./AbstractRepository";

class BookRepository extends AbstractRepository<Book> {
  // ['id']
  unique_criterias: string[] = [];

  constructor(unique_criterias) {
    super();
    this.unique_criterias = unique_criterias;
  }

  create = async (book: Book) => {
    return BookModel.create(book);
  };

  findOne = async (book: Book) => {
    const params = this.getUniqueCriteria(book, this.unique_criterias);
    return BookModel.findOne({
      where: {
        [Op.or]: params
      }
    });
  };

  findAll = async (order?: Order) => {
    if (!order) {
      order = "DESC";
    }
    return BookModel.findAll({
      order: [["created_at", order]]
    });
  };

  findAllByPaging = async (
    book: Book,
    offset?: number | 0,
    limit?: number | 20,
    order?: Order
  ) => {
    if (!order) {
      order = "DESC";
    }
    return BookModel.findAll({
      offset,
      limit,
      // where: book,
      order: [["created_at", order]]
    });
  };

  findAllByIds = async (ids: number[], order?: Order) => {
    if (!order) {
      order = "DESC";
    }
    const db_books = BookModel.findAll({
      where: {
        id: {
          [Op.or]: [ids]
        }
      },
      order: [["created_at", order]]
    });
    return db_books;
  };

  update = async (book: Book) => {
    const params = this.getUniqueCriteria(book, this.unique_criterias);
    try {
      BookModel.update(book, {
        where: {
          [Op.or]: params
        }
      });
    } catch (error) {
      return false;
    }
    return true;
  };

  delete = async (book: Book) => {
    const params = this.getUniqueCriteria(book, this.unique_criterias);
    try {
      BookModel.destroy({
        where: {
          [Op.or]: params
        }
      });
    } catch (error) {
      return false;
    }
    return true;
  };
}

export { BookRepository };
