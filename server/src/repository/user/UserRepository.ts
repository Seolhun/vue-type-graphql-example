import * as Sequelize from 'sequelize';
import { sequelize } from '../database';
import UserModel from './UserModel';

import * as ar from '../abstract/AbstractRepository';

interface User {
  id?: string;
  name?: string;
  email?: string;
  birth?: number;
  division?: number;
  active?: boolean;

  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

class UserRepository extends ar.AbstractRepository<User> {
  async create(user: User): Promise<User> {
    const dbUser = await UserModel.create(user);
    return dbUser;
  }

  async findOne(user: User): Promise<User | null> {
    const data = this.getUniqueCriteria(user, ['id', 'email']);
    const dbUuser = await UserModel.findOne({
      where: data,
    });
    return dbUuser;
  }

  async findAll(users: User[], offset?: number | 0, limit?: number | 20, order?: ar.Order): Promise<User[]> {
    if (!order) {
      order = ar.Order.DESC;
    }
    const dbUsers: User[] = await UserModel.findAll({
      offset,
      limit,
      where: users,
      order: [UserModel, 'created_at', order],
    });
    return dbUsers;
  }

  async findAllByIds(ids: number[], order?: ar.Order): Promise<User[]> {
    if (!order) {
      order = ar.Order.DESC;
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

export { UserRepository, User };
