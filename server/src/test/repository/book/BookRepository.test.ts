import { sandbox } from 'sinon';
import { BookRepository } from '../../../repository/book/BookRepository';

describe('#BookRepository', () => {
  let sandbox;
  let book_repository;

  beforeAll(async () => {
    sandbox = sandbox.create();
    book_repository = sandbox.stub(new BookRepository(), 'book_repository');
  });

  afterAll(async () => {
    sandbox.restore();
  });

  it('should catch', () => {
    book_repository.returns(Promise.reject(new Error('test-error')));
    return book_repository.findAll().catch((err) => {
        err.should.exist(err);
        err.message.should.equal('test-error');
      });
  });

  it('Book findOne by UK', () => {
    expect(book_repository.findOne({name: 'Seolhun'}).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  it('Book findAll', () => {
    expect(book_repository.findAll().then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  it('Book findAllByIds', () => {
    expect(book_repository.findAllByIds([1, 2, 3]).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  it('Book findAllByPaging', () => {
    expect(book_repository.findAllByPaging({name: 'What is the Web'}, 0, 20).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  it('Book create', () => {
    expect(book_repository.create({name: ''}).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  it('Book update', () => {
    expect(book_repository.update({name: ''}).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  it('Book delete', () => {
    expect(book_repository.delete({name: ''}).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });
});
