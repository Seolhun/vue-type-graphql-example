import * as Bluebird from 'bluebird';
import * as Sequelize from 'sequelize';

import { Division } from '../../types';
import { DivisionModel } from '../model';
import { AbstractRepository, Order } from './AbstractRepository';

class DivisionRepository extends AbstractRepository<Division> {
  // ['id', 'name']
  unique_criterias: string[] = [];

  constructor(unique_criterias) {
    super();
    this.unique_criterias = unique_criterias;
  }

  create(division: Division): Bluebird<Division> {
    const db_division: Bluebird<Division> = DivisionModel.create(division);
    return Bluebird.Promise.resolve(db_division);
  }

  findOne(division: Division): Bluebird<Division | null> {
    const params = this.getUniqueCriteria(division, this.unique_criterias);
    return DivisionModel.findOne({
      where: {
        [Sequelize.Op.or]: params,
      },
    });
  }

  findAll(order?: Order): Bluebird<Division[]> {
    if (!order) {
      order = 'DESC';
    }
    return DivisionModel.findAll({
      order: [
        ['created_at', order],
      ],
    });
  }

  findAllByPaging(divisions: Division, offset?: number | 0, limit?: number | 20, order?: Order): Bluebird<Division[]> {
    if (!order) {
      order = 'DESC';
    }
    return DivisionModel.findAll({
      offset,
      limit,
      where: divisions,
      order: [
        ['created_at', order],
      ],
    });
  }

  findAllByIds(ids: number[], order?: Order): Bluebird<Division[]> {
    if (!order) {
      order = 'DESC';
    }
    return DivisionModel.findAll({
      where: {
        id: [...ids],
      },
      order: [
        ['created_at', order],
      ],
    });
  }

  update(division: Division): Bluebird<boolean> {
    const params = this.getUniqueCriteria(division, this.unique_criterias);
    try {
      DivisionModel.update(division, {
        where: {
          [Sequelize.Op.or]: params,
        },
      });
    } catch (error) {
      return Bluebird.Promise.resolve(false);
    }
    return Bluebird.Promise.resolve(true);
  }

  delete(division: Division): Bluebird<boolean> {
    const params = this.getUniqueCriteria(division, this.unique_criterias);
    try {
      DivisionModel.destroy({
        where: {
          [Sequelize.Op.or]: params,
        },
      });
    } catch (error) {
      return Bluebird.Promise.resolve(false);
    }
    return Bluebird.Promise.resolve(true);
  }
}

export { DivisionRepository };
