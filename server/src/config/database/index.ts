import {
  Sequelize,
  FindOptions,
  CreateOptions,
  UpdateOptions,
  DestroyOptions
} from "sequelize";

import { logger } from "../logger";
import { initDefaultData } from "./default";

const sequelize = new Sequelize("shooney_management", "dev", "dev", {
  host: "localhost",
  dialect: "mysql",

  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 20000
  },
  define: {
    charset: "utf8",
    underscored: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true
  },
  hooks: {
    beforeFind: (options: FindOptions) => {
      logger.debug(`beforeFind`);
      logger.debug(options);
    },
    beforeCreate: (instance: any, options: CreateOptions) => {
      logger.debug(`beforeCreate`);
      logger.debug(instance);
    },
    beforeUpdate: (instance: any, options: UpdateOptions) => {
      logger.debug(`beforeUpdate`);
      logger.debug(instance);
    },
    beforeDestroy: (instance: any, options: DestroyOptions) => {
      logger.debug(`beforeDestroy`);
      logger.debug(instance);
    }
  }
});

sequelize.sync({ force: true }).then(() => {
  initDefaultData();
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Sequelize Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

export { sequelize };

export default sequelize;
