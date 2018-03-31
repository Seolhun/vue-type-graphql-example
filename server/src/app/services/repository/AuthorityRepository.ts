import Bluebird from 'bluebird';
import * as Sequelize from 'sequelize';

import { Authority } from '../../types';
import { AuthorityModel, DivisionModel } from '../model';
import { AbstractRepository, Order } from './AbstractRepository';

class AuthorityRepository extends AbstractRepository<Authority> {
  create(user: Authority): Bluebird<Authority> {
    return  AuthorityModel.create(user);
  }

  findOne(user: Authority): Bluebird<Authority | null> {
    const data = this.getUniqueCriteria(user, ['id', 'name']);
    return AuthorityModel.findOne({
      where: {
        [Sequelize.Op.or]: data,
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
    const data = this.getUniqueCriteria(user, ['id', 'name']);
    try {
      AuthorityModel.update(user, {
        where: {
          [Sequelize.Op.or]: data,
        },
      });
    } catch (error) {
      return Bluebird.Promise.resolve(false);
    }
    return Bluebird.Promise.resolve(true);
  }

  delete(user: Authority): Bluebird<boolean> {
    const data = this.getUniqueCriteria(user, ['id', 'name']);
    try {
      AuthorityModel.destroy({
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

export { AuthorityRepository };
