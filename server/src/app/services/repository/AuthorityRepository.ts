import * as Bluebird from 'bluebird';
import * as Sequelize from 'sequelize';

import { Authority } from '../../types';
import { AuthorityModel, DivisionModel } from '../model';
import { AbstractRepository, Order } from './AbstractRepository';

class AuthorityRepository extends AbstractRepository<Authority> {
  // ['id', 'name']
  unique_criterias: string[] = [];

  constructor(unique_criterias) {
    super();
    this.unique_criterias = unique_criterias;
  }

  create(user: Authority): Bluebird<Authority> {
    return  AuthorityModel.create(user);
  }

  findOne(user: Authority): Bluebird<Authority | null> {
    const params = this.getUniqueCriteria(user, this.unique_criterias);
    return AuthorityModel.findOne({
      where: {
        [Sequelize.Op.or]: params,
      },
    });
  }

  findAll(order?: Order): Bluebird<Authority[]> {
    if (!order) {
      order = 'DESC';
    }
    return AuthorityModel.findAll({
      order: [
        ['created_at', order],
      ],
    });
  }

  findAllByPaging(user: Authority, offset?: number | 0, limit?: number | 20, order?: Order): Bluebird<Authority[]> {
    if (!order) {
      order = 'DESC';
    }
    return AuthorityModel.findAll({
      offset,
      limit,
      where: user,
      order: [
        ['created_at', order],
      ],
    });
  }

  findAllByIds(ids: number[], order?: Order): Bluebird<Authority[]> {
    if (!order) {
      order = 'DESC';
    }
    return AuthorityModel.findAll({
      where: {
        id: [...ids],
      },
      order: [
        ['created_at', order],
      ],
    });
  }

  update(user: Authority): Bluebird<boolean> {
    const params = this.getUniqueCriteria(user, this.unique_criterias);
    try {
      AuthorityModel.update(user, {
        where: {
          [Sequelize.Op.or]: params,
        },
      });
    } catch (error) {
      return Bluebird.Promise.resolve(false);
    }
    return Bluebird.Promise.resolve(true);
  }

  delete(user: Authority): Bluebird<boolean> {
    const params = this.getUniqueCriteria(user, this.unique_criterias);
    try {
      AuthorityModel.destroy({
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

export { AuthorityRepository };
