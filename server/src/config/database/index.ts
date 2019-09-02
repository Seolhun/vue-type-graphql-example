import {
  Sequelize,
  FindOptions,
  CreateOptions,
  UpdateOptions,
  DestroyOptions,
} from "sequelize";
require("dotenv").config();

import { logger } from "../logger";
import { initDefaultData } from "./default";

const sequelize = new Sequelize(
  process.env.DB_DATABASE || "",
  process.env.DB_USER || "",
  process.env.DB_ROOT_PASSWORD || "",
  {
    host: process.env.DB_HOST || "127.0.0.1",
    port: Number.parseInt(process.env.DB_PORT || "3306", 10),
    dialect: "mariadb",
    dialectOptions: {
      connectTimeout: 1000,
      timezone: "Etc/GMT0",
    },
    pool: {
      max: 10,
      min: 1,
      acquire: 30000,
      idle: 20000,
    },
    define: {
      charset: "utf8",
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      paranoid: true,
    },
    logging: false,
    benchmark: false,
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
      },
    },
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Sequelize Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

sequelize.sync({ force: true }).then(() => {
  initDefaultData();
});

export { sequelize };

export default sequelize;
