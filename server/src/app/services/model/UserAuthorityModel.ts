import Sequelize from 'sequelize';
import { sequelize } from '../../../config/database';

import { AuthorityModel } from './AuthorityModel';
import { UserModel } from './UserModel';

const UserAuthorityModel = sequelize.define('user_authorities', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.BIGINT,
    unique: 'uk_user_authorities',
  },
  authority_id: {
    type: Sequelize.BIGINT,
    unique: 'uk_user_authorities',
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
  comment: 'Uesr Authorities Table',
});

AuthorityModel.belongsToMany(UserModel, {
  as: 'user',
  through: {
    name: 'user_authorities',
    model: UserAuthorityModel,
  },
  foreignKey: 'authority_id',
});

UserModel.belongsToMany(AuthorityModel, {
  as: 'authority',
  through: {
    name: 'user_authorities',
    model: UserAuthorityModel,
  },
  foreignKey: 'user_id',
});

export { UserAuthorityModel };
