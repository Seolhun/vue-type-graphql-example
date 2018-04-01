import { AuthorityModel, BookModel, DivisionModel, UserAuthorityModel, UserModel } from '../../../app/services/model';
import { Authority, Book, BookStatus, Division, User, UserAuthority } from '../../../app/types';

import { PasswordEncoderUtils } from '../../../app/utils/PasswordEncoderUtils';

const authority_datas: Authority[] = [
  {
    name: 'Admin',
    level: 0,
  }, {
    name: 'Back',
    level: 1,
  }, {
    name: 'Front',
    level: 2,
  }, {
    name: 'Data',
    level: 3,
  }, {
    name: 'Test',
    level: 4,
  }, {
    name: 'Alliance',
    level: 5,
  }, {
    name: 'Etc',
    level: 6,
  }, {
    name: 'Guest',
    level: 7,
  },
];

const book_datas: Book[] = [
  {
    name: '동시성의 원리',
    author: '폴 부쳐',
    status: BookStatus.NORMAL,
    description : '소프트웨어의 한계를 돌파하는 동시성의 원리',
  }, {
    name: 'ORM Frameowork',
    author: 'Orm',
    status: BookStatus.NORMAL,
    description : 'SQL 추상화를 위한 객체지향의 방법',
  }, {
    name: '처음 시작하는 파이썬',
    author: 'Python',
    status: BookStatus.ORDERED,
    description : 'Getting started python',
  }, {
    name: 'Hadoop is basic',
    author: 'Hadoop',
    status: BookStatus.BORROWED,
    description : '빅데이터를 위한 하둡',
  }, {
    name: 'You don\'t know JS',
    author: 'JS',
    status: BookStatus.REQUESTED,
    description : 'JS 기본을 파헤치는 책',
  },
];

const division_datas: Division[] = [
  {
    name: 'Dev',
    description: 'Development',
  }, {
    name: 'Finance',
    description: 'Finance',
  }, {
    name: 'HR',
    description: 'Human Resources',
  }, {
    name: 'Marketing',
    description: 'Marketing',
  }, {
    name: 'Alliance',
    description: 'Alliance',
  },
];

const user_datas: User[] = [
  {
    name: 'Shun',
    email: 'shun10114@google.com',
    birth: '19900126',
    division_id: 1,
    password: PasswordEncoderUtils.bcryptedPasswordSync('1234'),
  }, {
    name: 'Mark',
    email: 'mark@google.com',
    birth: '19940606',
    division_id: 2,
    password: PasswordEncoderUtils.bcryptedPasswordSync('1234'),
  }, {
    name: 'Gabriel',
    email: 'gabriel@naver.com',
    birth: '19881212',
    division_id: 3,
    password: PasswordEncoderUtils.bcryptedPasswordSync('1234'),
  }, {
    name: 'Chris',
    email: 'chris@hanmail.net',
    birth: '19800322',
    division_id: 4,
    password: PasswordEncoderUtils.bcryptedPasswordSync('1234'),
  },
];

const authority_user_datas: UserAuthority[]  = [
  {
    user_id: 1,
    authority_id: 1,
  }, {
    user_id: 2,
    authority_id: 6,
  }, {
    user_id: 3,
    authority_id: 8,
  }, {
    user_id: 4,
    authority_id: 8,
  },
];

function initDefaultData() {
  DivisionModel.bulkCreate(division_datas);
  AuthorityModel.bulkCreate(authority_datas).then(() => {
    UserModel.bulkCreate(user_datas).then((users) => {
      UserAuthorityModel.bulkCreate(authority_user_datas);
    });
  });
  BookModel.bulkCreate(book_datas);
}

export { initDefaultData };
