import { UserRepository } from '../../../repository/user/UserRepository';

describe('#UserRepository', () => {
  let sandbox;
  let user_repository;

  beforeAll(async () => {
    sandbox = sandbox.create();
    user_repository = sandbox.stub(new UserRepository(), 'user_repository');
  });

  afterAll(async () => {
    sandbox.restore();
  });

  it('should catch', () => {
    user_repository.returns(Promise.reject(new Error('test-error')));
    return user_repository.findAll().catch((err) => {
        err.should.exist(err);
        err.message.should.equal('test-error');
      });
  });

  test('User findOne by UK', () => {
    expect(user_repository.findOne({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User findAll', () => {
    expect(user_repository.findAll().then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User findAllByIds', () => {
    expect(user_repository.findAllByIds([1, 2, 3]).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User findAllByPaging', () => {
    expect(user_repository.findAllByPaging({email: 'shun10114@gmail.com', name: ''}, 0, 20).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User create', () => {
    expect(user_repository.create({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User update', () => {
    expect(user_repository.update({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });

  test('User delete', () => {
    expect(user_repository.delete({email: 'shun10114@gmail.com', name: ''}).then((user) => {
      console.log(user);
    })).toEqual({email: 'shun10114@gmail.com', name: 'Seolhun'});
  });
});
