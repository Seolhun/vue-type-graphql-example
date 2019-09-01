import Sequelize from "sequelize";

import { Division } from "../../types";
import { DivisionModel } from "../model";
import { AbstractRepository, Order } from "./AbstractRepository";

class DivisionRepository extends AbstractRepository<Division> {
  // ['id', 'name']
  unique_criterias: string[] = [];

  constructor(unique_criterias) {
    super();
    this.unique_criterias = unique_criterias;
  }

  create = async (division: Division) => {
    const db_division = DivisionModel.create(division);
    return db_division;
  };

  findOne = async (division: Division) => {
    const params = this.getUniqueCriteria(division, this.unique_criterias);
    return DivisionModel.findOne({
      where: {
        [Sequelize.Op.or]: params
      }
    });
  };

  findAll = async (order?: Order) => {
    if (!order) {
      order = "DESC";
    }
    return DivisionModel.findAll({
      order: [["created_at", order]]
    });
  };

  findAllByPaging = async (
    divisions: Division,
    offset?: number | 0,
    limit?: number | 20,
    order?: Order
  ) => {
    if (!order) {
      order = "DESC";
    }
    return DivisionModel.findAll({
      offset,
      limit,
      // where: divisions,
      order: [["created_at", order]]
    });
  };

  findAllByIds = async (ids: number[], order?: Order) => {
    if (!order) {
      order = "DESC";
    }
    return DivisionModel.findAll({
      where: {
        id: [...ids]
      },
      order: [["created_at", order]]
    });
  };

  update = async (division: Division) => {
    const params = this.getUniqueCriteria(division, this.unique_criterias);
    try {
      DivisionModel.update(division, {
        where: {
          [Sequelize.Op.or]: params
        }
      });
    } catch (error) {
      return false;
    }
    return true;
  };

  delete = async (division: Division) => {
    const params = this.getUniqueCriteria(division, this.unique_criterias);
    try {
      DivisionModel.destroy({
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

export { DivisionRepository };
