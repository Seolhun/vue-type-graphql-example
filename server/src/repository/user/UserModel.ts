import * as Sequelize from 'sequelize';
import { sequelize } from '../database';

import DivisionModel from '../division/DivisionModel';

const UserModel = sequelize.define('users', {
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
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  birth: {
    type: Sequelize.DATEONLY,
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
    indexes: [
      {
        unique: true,
        fields: ['email', 'name'],
      },
    ],
    comment: 'Uesr Table',
  });

UserModel.belongsTo(DivisionModel, { as: 'division' });

export default UserModel;
