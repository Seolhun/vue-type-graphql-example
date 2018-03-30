import Bluebird from 'bluebird';
import * as Sequelize from 'sequelize';

import { Division, User } from '../../types';
import { DivisionModel, UserModel } from '../model';
import { AbstractRepository, Order } from './AbstractRepository';

class UserRepository extends AbstractRepository<User> {
  create(user: User): Bluebird<User> {
    return  UserModel.create(user);
  }

  findOne(user: User): Bluebird<User | null> {
    const data = this.getUniqueCriteria(user, ['id', 'email', 'name']);
    return UserModel.findOne({
      where: {
        [Sequelize.Op.or]: data,
      },
    });
  }

  findAll(order?: Order): Bluebird<User[]> {
    if (!order) {
      order = 'DESC';
    }
    return UserModel.findAll({
      order: [
        ['created_at', order],
      ],
    });
  }

  findAllByPaging(user: User, offset?: number | 0, limit?: number | 20, order?: Order): Bluebird<User[]> {
    if (!order) {
      order = 'DESC';
    }
    return UserModel.findAll({
      offset,
      limit,
      where: user,
      order: [
        ['created_at', order],
      ],
    });
  }

  findAllByIds(ids: number[], order?: Order): Bluebird<User[]> {
    if (!order) {
      order = 'DESC';
    }
    return UserModel.findAll({
      where: {
        id: [...ids],
      },
      order: [
        ['created_at', order],
      ],
    });
  }

  update(user: User): Bluebird<boolean> {
    const data = this.getUniqueCriteria(user, ['id', 'email', 'name']);
    try {
      UserModel.update(user, {
        where: {
          [Sequelize.Op.or]: data,
        },
      });
    } catch (error) {
      return Bluebird.Promise.resolve(false);
    }
    return Bluebird.Promise.resolve(true);
  }

  delete(user: User): Bluebird<boolean> {
    const data = this.getUniqueCriteria(user, ['id', 'email', 'name']);
    try {
      UserModel.destroy({
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

export { UserRepository };
