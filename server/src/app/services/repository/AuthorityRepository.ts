import Sequelize, { Op } from "sequelize";

import { Authority } from "../../types";
import { AuthorityModel } from "../model";
import { AbstractRepository, Order } from "./AbstractRepository";

class AuthorityRepository extends AbstractRepository<Authority> {
  // ['id', 'name']
  unique_criterias: string[] = [];

  constructor(unique_criterias) {
    super();
    this.unique_criterias = unique_criterias;
  }

  create = async (user: Authority): Promise<AuthorityModel> => {
    return AuthorityModel.create(user);
  };

  findOne = async (user: Authority): Promise<AuthorityModel | null> => {
    const params = this.getUniqueCriteria(user, this.unique_criterias);
    return AuthorityModel.findOne({
      where: {
        [Sequelize.Op.or]: params
      }
    });
  };

  findAll = async (order?: Order): Promise<AuthorityModel[]> => {
    if (!order) {
      order = "DESC";
    }
    return AuthorityModel.findAll({
      order: [["created_at", order]]
    });
  };

  findAllByPaging = async (
    user: Authority,
    offset?: number | 0,
    limit?: number | 20,
    order?: Order
  ) => {
    if (!order) {
      order = "DESC";
    }
    return AuthorityModel.findAll({
      offset,
      limit,
      where: {
        name: "user",
        id: {
          [Op.or]: [[1, 2, 3]]
        }
      },
      order: [["created_at", order]]
    });
  };

  findAllByIds = async (ids: number[], order?: Order) => {
    if (!order) {
      order = "DESC";
    }

    return AuthorityModel.findAll({
      where: {
        name: "user",
        id: {
          [Op.or]: [ids]
        }
      },
      order: [["created_at", order]]
    });
  };

  update = async (user: Authority) => {
    const params = this.getUniqueCriteria(user, this.unique_criterias);
    try {
      AuthorityModel.update(user, {
        where: {
          [Sequelize.Op.or]: params
        }
      });
    } catch (error) {
      return false;
    }
    return true;
  };

  delete = async (user: Authority): Promise<boolean> => {
    const params = this.getUniqueCriteria(user, this.unique_criterias);
    try {
      AuthorityModel.destroy({
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

export { AuthorityRepository };
