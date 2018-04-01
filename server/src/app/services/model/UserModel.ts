import Sequelize from 'sequelize';
import { sequelize } from '../../../config/database';

import { AuthorityModel } from './AuthorityModel';
import { UserAuthorityModel } from './UserAuthorityModel';

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
  password: {
    type: Sequelize.STRING,
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
  comment: 'Uesr Table',
});

export { UserModel };
