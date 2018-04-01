import Bluebird from 'bluebird';
import * as Sequelize from 'sequelize';

import { Division, User } from '../../types';
import { DivisionModel, UserAuthorityModel, UserModel } from '../model';
import { AbstractRepository, Order } from './AbstractRepository';

class UserRepository extends AbstractRepository<User> {
  // ['id', 'email', 'name']);
  unique_criterias: string[] = [];

  constructor(unique_criterias) {
    super();
    this.unique_criterias = unique_criterias;
  }

  create(user: User): Bluebird<User> {
    return  UserModel.create(user);
  }

  findOne(user: User): Bluebird<User | null> {
    const params = this.getUniqueCriteria(user, this.unique_criterias);
    return UserModel.findOne({
      where: {
        [Sequelize.Op.or]: params,
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
    const params = this.getUniqueCriteria(user, this.unique_criterias);
    try {
      UserModel.update(user, {
        where: {
          [Sequelize.Op.or]: params,
        },
      });
    } catch (error) {
      return Bluebird.Promise.resolve(false);
    }
    return Bluebird.Promise.resolve(true);
  }

  delete(user: User): Bluebird<boolean> {
    const params = this.getUniqueCriteria(user, this.unique_criterias);
    try {
      UserModel.destroy({
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

export { UserRepository };
