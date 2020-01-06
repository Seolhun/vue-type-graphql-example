import { sandbox, stub } from "sinon";
import { BookRepository } from "../../../app/services/repository/BookRepository";

const bookRepository = new BookRepository();
describe("#BookRepository", () => {
  let localSandbox;
  let book_repository;

  beforeAll(async () => {
    localSandbox = sandbox.create();
    book_repository = localSandbox.stub(bookRepository, "book_repository");
  });

  afterAll(async () => {
    localSandbox.restore();
  });

  it("Book create", () => {
    const create = stub(book_repository, "create");
    expect(
      create({ name: "" }).then(user => {
        console.log(user);
      })
    ).toEqual({ name: "What is the Web" });
  });

  it("Book findOne by UK", () => {
    const findOne = stub(book_repository, "findOne");
    expect(
      findOne({ name: "Seolhun" }).then(user => {
        console.log(user);
      })
    ).toEqual({ name: "What is the Web" });
  });

  it("Book findAll", () => {
    const findAll = stub(book_repository, "findAll");
    expect(
      findAll().then(user => {
        console.log(user);
      })
    ).toEqual({ name: "What is the Web" });
  });

  it("Book findAllByIds", () => {
    const findAllByIds = stub(book_repository, "findAllByIds");
    expect(
      findAllByIds([1, 2, 3]).then(user => {
        console.log(user);
      })
    ).toEqual({ name: "What is the Web" });
  });

  it("Book findAllByPaging", () => {
    const findAllByPaging = stub(book_repository, "findAllByPaging");
    expect(
      findAllByPaging({ name: "What is the Web" }, 0, 20).then(user => {
        console.log(user);
      })
    ).toEqual({ name: "What is the Web" });
  });

  it("Book update", () => {
    const update = stub(book_repository, "update");
    expect(
      update({ name: "" }).then(user => {
        console.log(user);
      })
    ).toEqual({ name: "What is the Web" });
  });

  it("Book delete", () => {
    const deleteBook = stub(book_repository, "delete");
    expect(
      deleteBook({ name: "" }).then(user => {
        console.log(user);
      })
    ).toEqual({ name: "What is the Web" });
  });
});
