import Sequelize, { Model } from "sequelize";

import { sequelize } from "../../../config/database";

class BookModel extends Model {}
BookModel.init(
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING,
      comment: "GONE = 0, REQUESTED = 1, ORDERED = 2, NORMAR = 3, BORROWED = 4"
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
  { sequelize, modelName: "books", comment: "Book Table" }
);

export { BookModel };
