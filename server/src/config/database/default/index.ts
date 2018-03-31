import { AuthorityModel, BookModel, DivisionModel, UserModel } from '../../../app/services/model';

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

const default_book_datas = [
  {
    name: '동시성의 원리',
    writer: '폴 부쳐',
    status: '1',
    description : '소프트웨어의 한계를 돌파하는 동시성의 원리',
  }, {
    name: 'ORM Frameowork',
    writer: 'Orm',
    status: '1',
    description : 'SQL 추상화를 위한 객체지향의 방법',
  }, {
    name: '처음 시작하는 파이썬',
    writer: 'Python',
    status: '1',
    description : 'Getting started python',
  }, {
    name: 'Hadoop is basic',
    writer: 'Hadoop',
    status: '1',
    description : '빅데이터를 위한 하둡',
  }, {
    name: 'You don\'t know JS',
    writer: 'JS',
    status: '1',
    description : 'JS 기본을 파헤치는 책',
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
  BookModel.bulkCreate(default_book_datas);
  DivisionModel.bulkCreate(default_division_datas);
  UserModel.bulkCreate(default_user_datas);
}

export { initDefaultData };
