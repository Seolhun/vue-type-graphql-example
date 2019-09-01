import { Division } from "../types";
import { DivisionRepository } from "./repository";
import { Order } from "./repository/AbstractRepository";
import { DivisionModel } from "./model";

const divisionRepository = new DivisionRepository(["id", "name"]);
class DivisionService {
  createdDivision = async ({
    name,
    description
  }: Division): Promise<DivisionModel | Error> => {
    if (!name && !description) {
      return new Error("The name and description are requirement.");
    }

    const division = await divisionRepository.findOne({ name });
    if (!division) {
      return await divisionRepository.create({ name, description });
    }

    if (division.get("name") === name) {
      return Promise.reject(new Error(`Already '${name}' is exists.`));
    }
    return Promise.reject(new Error(`Already '${name}' is exists.`));
  };

  findOne({ id, name }: Division): Promise<DivisionModel | null> {
    if (!id && !name) {
      return Promise.reject(new Error("One of id and name are requirement."));
    }
    return divisionRepository.findOne({ id, name });
  }

  findAll(order: Order): Promise<DivisionModel[]> {
    return divisionRepository.findAll(order);
  }

  updatedDivision({ id, name, description }: Division): Promise<boolean> {
    if (!id && !name) {
      return Promise.reject(new Error("One of id and name are requirement."));
    }

    return divisionRepository.findOne({ id, name }).then(db_division => {
      if (!db_division) {
        return Promise.reject(new Error("The division is not found"));
      }
      return divisionRepository.update({ name, description });
    });
  }

  deletedDivision({ id, name }: Division): Promise<boolean> {
    if (!id && !name) {
      return Promise.reject(new Error("One of id and name is requirement."));
    }
    const db_division = divisionRepository.findOne({ id, name });
    if (!db_division) {
      return Promise.reject(new Error("The division is not found"));
    }
    return divisionRepository.delete({ id });
  }
}

export { DivisionService };
