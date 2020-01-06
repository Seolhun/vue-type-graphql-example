import { sandbox, stub } from "sinon";
import { DivisionRepository } from "../../../app/services/repository/DivisionRepository";

const divisionRepository = new DivisionRepository();
describe("#DivisionRepository", () => {
  let localSandbox;
  let division_repository;

  beforeAll(async () => {
    localSandbox = sandbox.create();
    division_repository = localSandbox.stub(
      divisionRepository,
      "division_repository"
    );
  });

  afterAll(async () => {
    localSandbox.restore();
  });

  test("User create", () => {
    const create = stub(division_repository, "create");
    expect(
      create({ name: "Dev" }).then(user => {
        console.log(user);
      })
    ).toEqual({ name: "Dev" });
  });

  test("User findOne by UK", () => {
    const findOne = stub(division_repository, "findOne");
    expect(
      findOne({ name: "Dev" }).then(user => {
        console.log(user);
      })
    ).toEqual({ name: "Dev" });
  });

  test("User findAll", () => {
    const findAll = stub(division_repository, "findAll");
    expect(
      findAll().then(user => {
        console.log(user);
      })
    ).toEqual({ name: "Dev" });
  });

  test("User findAllByIds", () => {
    const findAllByIds = stub(division_repository, "findAllByIds");
    expect(
      findAllByIds([1, 2, 3]).then(user => {
        console.log(user);
      })
    ).toEqual({ name: "Dev" });
  });

  test("User findAllByPaging", () => {
    const findAllByPaging = stub(division_repository, "findAllByPaging");
    expect(
      findAllByPaging({ name: "Dev" }, 0, 20).then(user => {
        console.log(user);
      })
    ).toEqual({ name: "Dev" });
  });

  test("User update", () => {
    const update = stub(division_repository, "update");
    expect(
      update({ name: "Dev" }).then(user => {
        console.log(user);
      })
    ).toEqual({ name: "Dev" });
  });

  test("User delete", () => {
    const deleteDivision = stub(division_repository, "delete");
    expect(
      deleteDivision({ name: "Dev" }).then(user => {
        console.log(user);
      })
    ).toEqual({ name: "Dev" });
  });
});
