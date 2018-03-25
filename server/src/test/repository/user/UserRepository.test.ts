import { sandbox, stub } from 'sinon';
import { UserRepository } from '../../../repository/user/UserRepository';

describe('#UserRepository', () => {
  let sandbox;

  beforeAll(async () => {
    sandbox = sandbox.create();
  });

  afterAll(async () => {
    sandbox.restore();
  });

  test('User create', () => {
    const create = stub(new UserRepository(), 'create');
    expect(create({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User findOne by UK', () => {
    const findOne = stub(new UserRepository(), 'findOne');
    expect(findOne({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User findAll', () => {
    const findAll = stub(new UserRepository(), 'findAll');
    expect(findAll().then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User findAllByIds', () => {
    const findAllByIds = stub(new UserRepository(), 'findAllByIds');
    expect(findAllByIds([1, 2, 3]).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User findAllByPaging', () => {
    const findAllByPaging = stub(new UserRepository(), 'findAllByPaging');
    expect(findAllByPaging({email: 'shun10114@gmail.com', name: ''}, 0, 20).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User update', () => {
    const update = stub(new UserRepository(), 'update');
    expect(update({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User delete', () => {
    const deleteUser = stub(new UserRepository(), 'delete');
    expect(deleteUser({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });
});
