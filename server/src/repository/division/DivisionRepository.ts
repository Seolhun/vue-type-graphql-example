import Bluebird from 'bluebird';
import * as Sequelize from 'sequelize';
import { DivisionModel } from './DivisionModel';

import { Division } from '../../model';
import * as abstracts from '../AbstractRepository';
class DivisionRepository extends abstracts.AbstractRepository<Division> {
  create(division: Division): Bluebird<Division> {
    const db_division: Bluebird<Division> = DivisionModel.create(division);
    return Bluebird.Promise.resolve(db_division);
  }

  findOne(division: Division): Bluebird<Division | null> {
    const data = this.getUniqueCriteria(division, ['id', 'name']);
    const db_division: Bluebird<Division | null> = DivisionModel.findOne({
      where: {
        [Sequelize.Op.or]: data,
      },
    });

    return Bluebird.Promise.resolve(db_division);
  }

  findAll(order?: abstracts.Order): Bluebird<Division[]> {
    if (!order) {
      order = 'DESC';
    }
    const db_divisions: Bluebird<Division[]> = DivisionModel.findAll({
      order: [
        ['created_at', order],
      ],
    });
    return Bluebird.Promise.resolve(db_divisions);
  }

  findAllByPaging(divisions: Division, offset?: number | 0, limit?: number | 20, order?: abstracts.Order): Bluebird<Division[]> {
    if (!order) {
      order = 'DESC';
    }
    const db_divisions: Bluebird<Division[]> = DivisionModel.findAll({
      offset,
      limit,
      where: divisions,
      order: [
        ['created_at', order],
      ],
    });
    return Bluebird.Promise.resolve(db_divisions);
  }

  findAllByIds(ids: number[], order?: abstracts.Order): Bluebird<Division[]> {
    if (!order) {
      order = 'DESC';
    }
    const db_divisions: Bluebird<Division[]> = DivisionModel.findAll({
      where: {
        id: [...ids],
      },
      order: [
        ['created_at', order],
      ],
    });
    return Bluebird.Promise.resolve(db_divisions);
  }

  update(division: Division): Bluebird<boolean> {
    const data = this.getUniqueCriteria(division, ['id', 'name']);
    try {
      DivisionModel.update(division, {
        where: {
          [Sequelize.Op.or]: data,
        },
      });
    } catch (error) {
      return Bluebird.Promise.resolve(false);
    }
    return Bluebird.Promise.resolve(true);
  }

  delete(division: Division): Bluebird<boolean> {
    const data = this.getUniqueCriteria(division, ['id', 'name']);
    try {
      DivisionModel.destroy({
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

export { DivisionRepository };
