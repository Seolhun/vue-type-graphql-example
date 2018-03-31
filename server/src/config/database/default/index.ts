import { AuthorityModel, DivisionModel, UserModel } from '../../../app/services/model';

const default_authority_datas = [
  {
    name: 'Admin',
    level: 1,
  }, {
    name: 'Back',
    level: 2,
  }, {
    name: 'Front',
    level: 3,
  }, {
    name: 'Data',
    level: 4,
  }, {
    name: 'Test',
    level: 5,
  }, {
    name: 'Alliance',
    level: 6,
  }, {
    name: 'Etc',
    level: 7,
  },
];

const default_division_datas = [
  {
    name: 'Dev',
    description: 'Development',

    active: true,
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name: 'Finance',
    description: 'Finance',

    active: true,
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name: 'HR',
    description: 'Human Resources',

    active: true,
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name: 'Marketing',
    description: 'Marketing',

    active: true,
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name: 'Alliance',
    description: 'Alliance',

    active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const default_user_datas = [
  {
    name: 'Shun',
    email: 'shun10114@google.com',
    birth: '19900126',
    division: 1,

    active: true,
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name: 'Mark',
    email: 'mark@google.com',
    birth: '19940606',
    division: 1,

    active: true,
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name: 'Gabriel',
    email: 'gabriel@naver.com',
    birth: '19881212',
    division: 1,

    active: true,
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name: 'Chris',
    email: 'chris@hanmail.net',
    birth: '19800322',
    division: 1,

    active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

function initDefaultData() {
  AuthorityModel.bulkCreate(default_authority_datas);
  DivisionModel.bulkCreate(default_division_datas);
  UserModel.bulkCreate(default_user_datas);
}

export { initDefaultData };
