import * as Sequelize from 'sequelize';
import { sequelize } from '../database';
import UserModel from './UserModel';

import AbstractRepository from '../AbstractRepository';

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

class UserRepository implements AbstractRepository<User> {
  async create(user: User) {
    const created = await UserModel.create(user);
    return created;
  }
  findOneById() {
    throw new Error('Method not implemented.');
  }
  findAllByIds() {
    throw new Error('Method not implemented.');
  }
  updateById() {
    throw new Error('Method not implemented.');
  }
  deleteById() {
    throw new Error('Method not implemented.');
  }
}

export { UserRepository, User };
