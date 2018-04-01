import Sequelize from 'sequelize';
import { sequelize } from '../../../config/database';

const AuthorityModel = sequelize.define('authorities', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    validate: {
      is: /^[가-힣a-zA-Z]{3,20}/g,
    },
    unique: true,
  },
  level: {
    type: Sequelize.INTEGER,
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
  comment: 'Authority Table',
  indexes: [
    {
      unique: true,
      fields: ['name', 'level'],
    },
  ],
});

export { AuthorityModel };
