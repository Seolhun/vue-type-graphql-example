import Bluebird from 'bluebird';
import { Division } from '../model';
import { Order } from '../repository/AbstractRepository';
import { DivisionRepository } from '../repository/division/DivisionRepository';

const division_repository = new DivisionRepository();
class DivisionService {
  createdDivision({ name, description }: Division): Bluebird<Division>  {
    if (!name) {
      return Bluebird.reject(new Error('The name is requirement.'));
    }

    return division_repository.findOne({ name }).then((division) => {
      if (division) {
        if (division.name === name) {
          return Bluebird.reject(new Error(`Already '${name}' is existed.`));
        }
        return Bluebird.reject(new Error(`Already '${name}' is existed.`));
      }
      return division_repository.create({ name, description });
    });
  }

  findOne({ id }: Division): Bluebird<Division | null> {
    if (!id) {
      return Bluebird.reject(new Error('id is requirement.'));
    }
    return division_repository.findOne({ id });
  }

  findAll(order: Order): Bluebird<Division[]> {
    return division_repository.findAll(order);
  }

  updatedDivision({ id, name, description }: Division): Bluebird<boolean> {
    if (!id) {
      return Bluebird.reject(new Error('id is requirement.'));
    }

    return division_repository.findOne({ id }).then((db_book) => {
      if (!db_book) {
        return Bluebird.reject(new Error('The book is not found'));
      }
      return division_repository.update({ name, description });
    });
  }

  deletedDivision({ id }: Division): Bluebird<boolean> {
    if (!id) {
      return Bluebird.reject(new Error('id is requirement.'));
    }
    const db_book = division_repository.findOne({ id });
    if (!db_book) {
      return Bluebird.reject(new Error('The division is not found'));
    }
    return division_repository.delete({ id });
  }
}

export { DivisionService };
