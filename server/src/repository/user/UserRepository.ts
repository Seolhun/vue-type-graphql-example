import Bluebird from 'bluebird';
import * as Sequelize from 'sequelize';

import { Division, User } from '../../model';
import { AbstractRepository, Order } from '../AbstractRepository';
import { DivisionModel } from '../division/DivisionModel';
import { UserModel } from './UserModel';

class UserRepository extends AbstractRepository<User> {
  create(user: User): Bluebird<User> {
    const dbUser: Bluebird<User> = UserModel.create(user);
    return Bluebird.Promise.resolve(dbUser);
  }

  findOne(user: User): Bluebird<User | null> {
    const data = this.getUniqueCriteria(user, ['id', 'email', 'name']);
    const db_user: Bluebird<User | null> = UserModel.findOne({
      where: {
        [Sequelize.Op.or]: data,
      },
    });

    return Bluebird.Promise.resolve(db_user);
  }

  findAll(order?: Order): Bluebird<User[]> {
    if (!order) {
      order = 'DESC';
    }
    const db_users: Bluebird<User[]> = UserModel.findAll({
      order: [
        ['created_at', order],
      ],
    });
    return Bluebird.Promise.resolve(db_users);
  }

  findAllByPaging(user: User, offset?: number | 0, limit?: number | 20, order?: Order): Bluebird<User[]> {
    if (!order) {
      order = 'DESC';
    }
    const db_users: Bluebird<User[]> = UserModel.findAll({
      offset,
      limit,
      where: user,
      order: [
        ['created_at', order],
      ],
    });
    return Bluebird.Promise.resolve(db_users);
  }

  findAllByIds(ids: number[], order?: Order): Bluebird<User[]> {
    if (!order) {
      order = 'DESC';
    }
    const db_users: Bluebird<User[]> = UserModel.findAll({
      where: {
        id: [...ids],
      },
      order: [
        ['created_at', order],
      ],
    });
    return Bluebird.Promise.resolve(db_users);
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
