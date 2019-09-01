import Sequelize, { Model } from "sequelize";
import { sequelize } from "../../../config/database";

import { UserModel } from "./UserModel";

class DivisionModel extends Model {}
DivisionModel.init(
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        is: /^[가-힣a-zA-Z0-9]{2,20}/g
      }
    },
    description: {
      type: Sequelize.STRING
    },

    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    created_at: {
      type: Sequelize.DATE
    },
    updated_at: {
      type: Sequelize.DATE
    },
    deleted_at: {
      type: Sequelize.DATE
    }
  },
  { sequelize, modelName: "divisions", comment: "Division Table" }
);

DivisionModel.hasMany(UserModel, { as: "divisions" });

export { DivisionModel };
