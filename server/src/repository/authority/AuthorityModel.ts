import * as Sequelize from 'sequelize';
import { sequelize } from '../../config/database';

import { UserModel } from '../user/UserModel';

const AuthorityModel = sequelize.define('users', {
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
  comment: 'Uesr Table',
});

AuthorityModel.hasMany(UserModel, { as: 'divisions' });

export { AuthorityModel };
