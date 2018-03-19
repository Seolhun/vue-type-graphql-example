import { sequelize } from '../../../config/database';
import { logger } from '../../../config/logger';

import { BookRepository } from '../../../repository/book/BookRepository';

const bookRepository = new BookRepository();
describe('#BookRepository', () => {
  test('Book findOne by UK', () => {
    expect(bookRepository.findOne({name: ''}).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  test('Book findAll', () => {
    expect(bookRepository.findAll().then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  test('Book findAllByIds', () => {
    expect(bookRepository.findAllByIds([1, 2, 3]).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  test('Book findAllByPaging', () => {
    expect(bookRepository.findAllByPaging({name: 'What is the Web'}, 0, 20).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  test('Book create', () => {
    expect(bookRepository.create({name: ''}).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  test('Book update', () => {
    expect(bookRepository.update({name: ''}).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  test('Book delete', () => {
    expect(bookRepository.delete({name: ''}).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });
});
