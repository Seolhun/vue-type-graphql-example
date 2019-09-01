import Sequelize, { Model } from "sequelize";
import { sequelize } from "../../../config/database";

import { AuthorityModel } from "./AuthorityModel";
import { UserModel } from "./UserModel";

class UserAuthorityModel extends Model {}

UserAuthorityModel.init(
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: Sequelize.BIGINT,
      unique: "uk_user_authorities"
    },
    authority_id: {
      type: Sequelize.BIGINT,
      unique: "uk_user_authorities"
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
    modelName: "user_authorities",
    comment: "Uesr Authorities Table"
  }
);

AuthorityModel.belongsToMany(UserModel, {
  as: "user",
  through: {
    model: UserAuthorityModel
  },
  foreignKey: "authority_id"
});

UserModel.belongsToMany(AuthorityModel, {
  as: "authority",
  through: {
    model: UserAuthorityModel
  },
  foreignKey: "user_id"
});

export { UserAuthorityModel };
