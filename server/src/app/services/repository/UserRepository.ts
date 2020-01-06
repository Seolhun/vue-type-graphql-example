import Sequelize from "sequelize";

import { User } from "../../types";
import { UserModel } from "../model";
import { AbstractRepository, Order } from "./AbstractRepository";

class UserRepository extends AbstractRepository<User> {
  // ['id', 'email', 'name']);
  unique_criterias: string[] = [];

  constructor(unique_criterias = []) {
    super();
    this.unique_criterias = unique_criterias;
  }

  create = async (user: User) => {
    return UserModel.create(user);
  };

  findOne = async (user: User) => {
    const params = this.getUniqueCriteria(user, this.unique_criterias);
    return UserModel.findOne({
      where: {
        [Sequelize.Op.or]: params
      }
    });
  };

  findAll = async (order?: Order) => {
    if (!order) {
      order = "DESC";
    }
    return UserModel.findAll({
      order: [["created_at", order]]
    });
  };

  findAllByPaging = async (
    user: User,
    offset?: number | 0,
    limit?: number | 20,
    order?: Order
  ) => {
    if (!order) {
      order = "DESC";
    }
    return UserModel.findAll({
      offset,
      limit,
      // where: user,
      order: [["created_at", order]]
    });
  };

  findAllByIds = async (ids: number[], order?: Order) => {
    if (!order) {
      order = "DESC";
    }
    return UserModel.findAll({
      where: {
        id: [...ids]
      },
      order: [["created_at", order]]
    });
  };

  update = async (user: User) => {
    const params = this.getUniqueCriteria(user, this.unique_criterias);
    try {
      UserModel.update(user, {
        where: {
          [Sequelize.Op.or]: params
        }
      });
    } catch (error) {
      return false;
    }
    return true;
  };

  delete = async (user: User) => {
    const params = this.getUniqueCriteria(user, this.unique_criterias);
    try {
      UserModel.destroy({
        where: {
          [Sequelize.Op.or]: params
        }
      });
    } catch (error) {
      return false;
    }
    return true;
  };
}

export { UserRepository };
