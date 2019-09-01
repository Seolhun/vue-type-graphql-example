import Sequelize, { Model } from "sequelize";
import { sequelize } from "../../../config/database";

class UserModel extends Model {}

UserModel.init(
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
        is: /^[가-힣a-zA-Z]{3,20}/g
      }
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: Sequelize.STRING
    },
    birth: {
      type: Sequelize.DATEONLY
    },

    google_id: {
      type: Sequelize.STRING,
      unique: true
    },
    github_id: {
      type: Sequelize.STRING,
      unique: true
    },
    facebook_id: {
      type: Sequelize.STRING,
      unique: true
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
  {
    sequelize,
    modelName: "users",
    comment: "Uesr Table"
  }
);

export { UserModel };
