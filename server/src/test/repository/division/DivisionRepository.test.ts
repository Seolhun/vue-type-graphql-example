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

  it('should catch', () => {
    division_repository.returns(Promise.reject(new Error('test-error')));
    return division_repository.findAll().catch((err) => {
        err.should.exist(err);
        err.message.should.equal('test-error');
      });
  });

  test('User findOne by UK', () => {
    expect(division_repository.findOne({name: 'Dev'}).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User findAll', () => {
    expect(division_repository.findAll().then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User findAllByIds', () => {
    expect(division_repository.findAllByIds([1, 2, 3]).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User findAllByPaging', () => {
    expect(division_repository.findAllByPaging({name: 'Dev'}, 0, 20).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User create', () => {
    expect(division_repository.create({name: 'Dev'}).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User update', () => {
    expect(division_repository.update({name: 'Dev'}).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });

  test('User delete', () => {
    expect(division_repository.delete({name: 'Dev'}).then((user) => {
      console.log(user);
    })).toEqual({name: 'Dev'});
  });
});
