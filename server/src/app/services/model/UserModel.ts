import { sequelize, Sequelize } from '../../../config/database';

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

const UserAuthorityModel = sequelize.define('user_authorites', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.BIGINT,
  },
  authority_id: {
    type: Sequelize.BIGINT,
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
});

AuthorityModel.belongsToMany(UserModel, {
  through: {
    model: UserAuthorityModel,
    scope: {
      taggable: 'authorities',
    },
  },
  foreignKey: 'user_id',
  // constraints: true,
});

UserModel.belongsToMany(AuthorityModel, {
  through: {
    model: UserAuthorityModel,
  },
  foreignKey: 'authority_id',
  // constraints: true,
});

export { AuthorityModel, UserModel, UserAuthorityModel };
