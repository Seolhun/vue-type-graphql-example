import { sequelize, Sequelize } from '../../config/database';

import { UserModel } from './UserModel';

const DivisionModel = sequelize.define('divisions', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      is: /^[가-힣a-zA-Z0-9]{2,20}/g,
    },
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
    comment: 'Division Table',
  },
);

DivisionModel.hasMany(UserModel, { as: 'divisions' });

export { DivisionModel };
