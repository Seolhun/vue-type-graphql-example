import * as Sequelize from 'sequelize';
import { sequelize } from '../database';
import DivisionModel from './DivisionModel';

import AbstractRepository from '../abstract/AbstractRepository';

interface Division {
  id?: string;
  name?: string;
  description?: string;

  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

class DivisionRepository implements AbstractRepository<Division> {
  async create(divison: Division) {
    const created = await DivisionModel.create(divison);
    return created;
  }
  async findAllByIds([]: Division[]) {
    throw new Error('Method not implemented.');
  }
  async findOneById({ id }: Division) {
    const created = await DivisionModel.findById(id);
    return created;
  }
  async updateById(divison: Division) {
    const created = await DivisionModel.update(divison, { where: { divison } });
    return created;
  }
  async deleteById({ id }: Division) {
    throw new Error('Method not implemented.');
  }
}

export { DivisionRepository, Division };
