import { Authority } from "../types";
import { AuthorityRepository } from "./repository";
import { Order } from "./repository/AbstractRepository";

const authority_repository = new AuthorityRepository(["id", "name"]);
class AuthorityService {
  createdAuthority = async ({ name, level }: Authority) => {
    if (!name || !level) {
      return Promise.reject(new Error("The name and level is requirement."));
    }

    const dbAuthority = await authority_repository.findOne({ name });
    if (dbAuthority) {
      return Promise.reject(new Error(`Already '${name}' is exists.`));
    }
    return authority_repository.create({ name, level });
  };

  findOne = async ({ id, name }: Authority) => {
    if (!id && !name) {
      return Promise.reject(new Error("One of id and name is requirement."));
    }
    return authority_repository.findOne({ id, name });
  };

  findAll = async (order: Order) => {
    return authority_repository.findAll("DESC");
  };

  updatedAuthority = async ({ name, level, description }: Authority) => {
    if (!name) {
      return Promise.reject(new Error("id or name is requirement."));
    }

    const dbAuthority = await authority_repository.findOne({ name });
    if (!dbAuthority) {
      return Promise.reject(new Error("The authority is not found"));
    }
    return authority_repository.update({ name, level, description });
  };

  deletedAuthority = async ({ id, name }: Authority) => {
    if (!id && !name) {
      return Promise.reject(new Error(`id or name is requirement.`));
    }
    const dbAuthority = await authority_repository.findOne({ id, name });

    if (!dbAuthority) {
      return Promise.reject(new Error("The authority is not found"));
    }
    return authority_repository.delete({ id, name });
  };
}

export { AuthorityService };
