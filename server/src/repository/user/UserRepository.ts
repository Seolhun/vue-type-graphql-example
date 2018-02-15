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

class UserRepository implements ar.AbstractRepository<User> {
  getUniqueCriteria(user: User) {
    let data;
    if (user.id) {
      data = {
        id: user.id,
      };
    } else if (user.email) {
      data = {
        email: user.email,
      };
    } else {
      data = {};
    }
    return data;
  }

  async create(user: User): Promise<User> {
    try {
      await UserModel.create(user);
    } catch (error) {
      return new Error('Not found user');
    }
    return user;
  }

  async findOne(user: User): Promise<User | null> {
    let data;
    try {
      data = this.getUniqueCriteria(user);
    } catch (error) {
      return new Error('Not found user');
    }
    const dbUuser = await UserModel.findOne({
      where: {
        data,
      },
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

  async updateById(user: User): Promise<User | void> {
    let data;
    try {
      data = this.getUniqueCriteria(user);
    } catch (error) {
      return new Error('Not found user');
    }
    await UserModel.update(user, {
      where: {
        data,
      },
    });
  }

  async deleteById(user: User): Promise<User | void> {
    let data;
    try {
      data = this.getUniqueCriteria(user);
    } catch (error) {
      return new Error('Not found user');
    }
    await UserModel.destroy({
      where: {
        data,
      },
    });
  }
}

export { UserRepository, User };
