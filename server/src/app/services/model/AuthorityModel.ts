import Sequelize, { Model } from "sequelize";

import { sequelize } from "../../../config/database";

class AuthorityModel extends Model {}

AuthorityModel.init(
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      validate: {
        is: /^[가-힣a-zA-Z]{3,20}/g
      },
      unique: true
    },
    level: {
      type: Sequelize.INTEGER
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
  { sequelize, modelName: "authorities" }
);

export { AuthorityModel };
