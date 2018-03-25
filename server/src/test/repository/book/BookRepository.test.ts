import { sandbox, stub } from 'sinon';
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

  it('Book create', () => {
    const create = stub(new BookRepository(), 'create');
    expect(create({name: ''}).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  it('Book findOne by UK', () => {
    const findOne = stub(new BookRepository(), 'findOne');
    expect(findOne({name: 'Seolhun'}).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  it('Book findAll', () => {
    const findAll = stub(new BookRepository(), 'findAll');
    expect(findAll().then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  it('Book findAllByIds', () => {
    const findAllByIds = stub(new BookRepository(), 'findAllByIds');
    expect(findAllByIds([1, 2, 3]).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  it('Book findAllByPaging', () => {
    const findAllByPaging = stub(new BookRepository(), 'findAllByPaging');
    expect(findAllByPaging({name: 'What is the Web'}, 0, 20).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  it('Book update', () => {
    const update = stub(new BookRepository(), 'update');
    expect(update({name: ''}).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });

  it('Book delete', () => {
    const deleteBook = stub(new BookRepository(), 'delete');
    expect(deleteBook({name: ''}).then((user) => {
      console.log(user);
    })).toEqual({name: 'What is the Web'});
  });
});
