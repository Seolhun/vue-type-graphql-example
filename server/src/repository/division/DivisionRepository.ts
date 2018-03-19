import * as Sequelize from 'sequelize';
import { DivisionModel } from './DivisionModel';

import { Division } from '../../model';
import * as abstracts from '../AbstractRepository';
class DivisionRepository extends abstracts.AbstractRepository<Division> {
  async create(division: Division): Promise<Division> {
    const dbDivision = await DivisionModel.create(division);
    return dbDivision;
  }

  async findOne(division: Division): Promise<Division> {
    const data = this.getUniqueCriteria(division, ['id']);
    let dbDivision = await DivisionModel.findOne({
      where: {
        [Sequelize.Op.or]: data,
      },
    });

    if (!dbDivision) {
      dbDivision = {};
    }
    return dbDivision;
  }

  async findAll(order?: abstracts.Order): Promise<Division[]> {
    if (!order) {
      order = 'DESC';
    }
    const dbDivisions: Division[] = await DivisionModel.findAll({
      order: [DivisionModel, 'created_at', order],
    });
    return dbDivisions;
  }

  async findAllByPaging(divisions: Division, offset?: number | 0, limit?: number | 20, order?: abstracts.Order): Promise<Division[]> {
    if (!order) {
      order = 'DESC';
    }
    const dbDivisions: Division[] = await DivisionModel.findAll({
      offset,
      limit,
      where: divisions,
      order: [
        ['created_at', order],
      ],
    });
    return dbDivisions;
  }

  async findAllByIds(ids: number[], order?: abstracts.Order): Promise<Division[]> {
    if (!order) {
      order = 'DESC';
    }
    const dbDivisions: Division[] = await DivisionModel.findAll({
      where: {
        id: [...ids],
      },
      order: [
        ['created_at', order],
      ],
    });
    return dbDivisions;
  }

  async update(division: Division): Promise<Division | boolean> {
    const data = this.getUniqueCriteria(division, ['id']);
    try {
      await DivisionModel.update(division, {
        where: {
          [Sequelize.Op.or]: data,
        },
      });
    } catch (error) {
      return false;
    }
    return true;
  }

  async delete(division: Division): Promise<Division | boolean> {
    const data = this.getUniqueCriteria(division, ['id']);
    try {
      await DivisionModel.destroy({
        where: {
          [Sequelize.Op.or]: data,
        },
      });
    } catch (error) {
      return false;
    }
    return true;
  }
}

export { DivisionRepository };
