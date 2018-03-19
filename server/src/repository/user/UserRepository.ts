import * as Sequelize from 'sequelize';
import { DivisionModel } from '../division/DivisionModel';
import { UserModel } from './UserModel';

import { Division, User } from '../../model';
import * as abstracts from '../AbstractRepository';

class UserRepository extends abstracts.AbstractRepository<User> {
  async create(user: User): Promise<User> {
    const dbUser = await UserModel.create(user);
    return dbUser;
  }

  async findOne(user: User): Promise<User> {
    const data = this.getUniqueCriteria(user, ['id', 'email', 'name']);

    let db_user = await UserModel.findOne({
      where: {
        [Sequelize.Op.or]: data,
      },
    });

    if (!db_user) {
      db_user = {};
    }
    return db_user;
  }

  async findAll(order?: abstracts.Order): Promise<User[]> {
    if (!order) {
      order = 'DESC';
    }
    const dbUsers: User[] = await UserModel.findAll({
      order: [
        ['created_at', order],
      ],
    });
    return dbUsers;
  }

  async findAllByPaging(user: User, offset?: number | 0, limit?: number | 20, order?: abstracts.Order): Promise<User[]> {
    if (!order) {
      order = 'DESC';
    }
    const dbUsers: User[] = await UserModel.findAll({
      offset,
      limit,
      where: user,
      order: [
        ['created_at', order],
      ],
    });
    return dbUsers;
  }

  async findAllByIds(ids: number[], order?: abstracts.Order): Promise<User[]> {
    if (!order) {
      order = 'DESC';
    }
    const dbUsers: User[] = await UserModel.findAll({
      where: {
        id: [...ids],
      },
      order: [UserModel, 'created_at', order],
    });
    return dbUsers;
  }

  async update(user: User): Promise<User | boolean> {
    const data = this.getUniqueCriteria(user, ['id', 'email']);
    try {
      await UserModel.update(user, {
        where: {
          [Sequelize.Op.or]: data,
        },
      });
    } catch (error) {
      return false;
    }
    return true;
  }

  async delete(user: User): Promise<User | boolean> {
    const data = this.getUniqueCriteria(user, ['id', 'email']);
    try {
      await UserModel.destroy({
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

export { UserRepository };
