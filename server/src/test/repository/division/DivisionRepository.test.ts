import { sequelize } from '../../../config/database';
import { logger } from '../../../config/logger';

import { DivisionRepository } from '../../../repository/division/DivisionRepository';

const divisionRepository = new DivisionRepository();
describe('#DivisionRepository', () => {
  test('User findOne by UK', () => {
    expect(divisionRepository.findOne({name: 'Dev'}).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User findAll', () => {
    expect(divisionRepository.findAll().then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User findAllByIds', () => {
    expect(divisionRepository.findAllByIds([1, 2, 3]).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User findAllByPaging', () => {
    expect(divisionRepository.findAllByPaging({name: 'Dev'}, 0, 20).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User create', () => {
    expect(divisionRepository.create({name: 'Dev'}).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User update', () => {
    expect(divisionRepository.update({name: 'Dev'}).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User delete', () => {
    expect(divisionRepository.delete({name: 'Dev'}).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });
});
