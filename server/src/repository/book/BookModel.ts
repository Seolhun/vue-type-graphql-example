import * as Sequelize from 'sequelize';
import { sequelize } from '../../config/database';

const BookModel = sequelize.define('books', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  writer: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.BOOLEAN,
  },
  description: {
    type: Sequelize.STRING,
  },

  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  created_at: {
    type: Sequelize.DATE,
  },
  updated_at: {
    type: Sequelize.DATE,
  },
  deleted_at: {
    type: Sequelize.DATE,
  },
}, {
  comment: 'Book Table',
});

export { BookModel };
