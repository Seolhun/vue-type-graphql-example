import * as Sequelize from 'sequelize';
import { sequelize } from '../database';
import DivisionModel from '../division/DivisionModel';
import UserModel from './UserModel';

import { Division, User } from '../../model';
import * as ar from '../abstract/AbstractRepository';

class UserRepository extends ar.AbstractRepository<User> {
  async create(user: User): Promise<User> {
    const dbUser = await UserModel.create(user);
    return dbUser;
  }

  async findOne(user: User): Promise<User | null> {
    const data = this.getUniqueCriteria(user, ['id', 'email']);
    const dbUser = await UserModel.findOne({
      where: data,
    });
    return dbUser;
  }

  async findAll(order?: ar.Order): Promise<User[]> {
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

  async findAllByPaging(users: User[], offset?: number | 0, limit?: number | 20, order?: ar.Order): Promise<User[]> {
    if (!order) {
      order = 'DESC';
    }
    const dbUsers: User[] = await UserModel.findAll({
      offset,
      limit,
      where: users,
      order: [
        ['created_at', order],
      ],
    });
    return dbUsers;
  }

  async findAllByIds(ids: number[], order?: ar.Order): Promise<User[]> {
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
        where: data,
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
        where: data,
      });
    } catch (error) {
      return false;
    }
    return true;
  }
}

export { UserRepository };
