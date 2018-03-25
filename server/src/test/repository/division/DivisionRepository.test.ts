import { sandbox, stub } from 'sinon';
import { DivisionRepository } from '../../../repository/division/DivisionRepository';

describe('#DivisionRepository', () => {
  let sandbox;
  let division_repository;

  beforeAll(async () => {
    sandbox = sandbox.create();
    division_repository = sandbox.stub(new DivisionRepository(), 'division_repository');
  });

  afterAll(async () => {
    sandbox.restore();
  });

  test('User create', () => {
    const create = stub(new DivisionRepository(), 'create');
    expect(create({name: 'Dev'}).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User findOne by UK', () => {
    const findOne = stub(new DivisionRepository(), 'findOne');
    expect(findOne({name: 'Dev'}).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User findAll', () => {
    const findAll = stub(new DivisionRepository(), 'findAll');
    expect(findAll().then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User findAllByIds', () => {
    const findAllByIds = stub(new DivisionRepository(), 'findAllByIds');
    expect(findAllByIds([1, 2, 3]).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User findAllByPaging', () => {
    const findAllByPaging = stub(new DivisionRepository(), 'findAllByPaging');
    expect(findAllByPaging({name: 'Dev'}, 0, 20).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User update', () => {
    const update = stub(new DivisionRepository(), 'update');
    expect(update({name: 'Dev'}).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User delete', () => {
    const deleteDivision = stub(new DivisionRepository(), 'delete');
    expect(deleteDivision({name: 'Dev'}).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });
});
