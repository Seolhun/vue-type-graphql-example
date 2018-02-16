import * as Sequelize from 'sequelize';
import { sequelize } from '../database';
import DivisionModel from './DivisionModel';

import * as ar from '../abstract/AbstractRepository';

interface Division {
  id?: string;
  name?: string;
  description?: string;

  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

class DivisionRepository extends ar.AbstractRepository<Division> {
  async create(division: Division): Promise<Division> {
    const dbDivision = await DivisionModel.create(division);
    return dbDivision;
  }

  async findOne(division: Division): Promise<Division | null> {
    const data = this.getUniqueCriteria(division, ['id', 'email']);
    const dbUdivision = await DivisionModel.findOne({
      where: data,
    });
    return dbUdivision;
  }

  async findAll(divisions: Division[], offset?: number | 0, limit?: number | 20, order?: ar.Order): Promise<Division[]> {
    if (!order) {
      order = ar.Order.DESC;
    }
    const dbDivisions: Division[] = await DivisionModel.findAll({
      offset,
      limit,
      where: divisions,
      order: [DivisionModel, 'created_at', order],
    });
    return dbDivisions;
  }

  async findAllByIds(ids: number[], order?: ar.Order): Promise<Division[]> {
    if (!order) {
      order = ar.Order.DESC;
    }
    const dbDivisions: Division[] = await DivisionModel.findAll({
      where: {
        id: [...ids],
      },
      order: [DivisionModel, 'created_at', order],
    });
    return dbDivisions;
  }

  async update(division: Division): Promise<Division | boolean> {
    const data = this.getUniqueCriteria(division, ['id', 'email']);
    try {
      await DivisionModel.update(division, {
        where: data,
      });
    } catch (error) {
      return false;
    }
    return true;
  }

  async delete(division: Division): Promise<Division | boolean> {
    const data = this.getUniqueCriteria(division, ['id', 'email']);
    try {
      await DivisionModel.destroy({
        where: data,
      });
    } catch (error) {
      return false;
    }
    return true;
  }
}

export { DivisionRepository, Division };
