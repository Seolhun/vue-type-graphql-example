import * as Bluebird from 'bluebird';
import { Division } from '../types';
import { DivisionRepository } from './repository';
import { Order } from './repository/AbstractRepository';

const division_repository = new DivisionRepository(['id', 'name']);
class DivisionService {
  createdDivision({ name, description }: Division): Bluebird<Division>  {
    if (!name && !description) {
      return Bluebird.reject(new Error('The name and description are requirement.'));
    }

    return division_repository.findOne({ name }).then((division) => {
      if (division) {
        if (division.name === name) {
          return Bluebird.reject(new Error(`Already '${name}' is exists.`));
        }
        return Bluebird.reject(new Error(`Already '${name}' is exists.`));
      }
      return division_repository.create({ name, description });
    });
  }

  findOne({ id, name }: Division): Bluebird<Division | null> {
    if (!id && !name) {
      return Bluebird.reject(new Error('One of id and name are requirement.'));
    }
    return division_repository.findOne({ id, name });
  }

  findAll(order: Order): Bluebird<Division[]> {
    return division_repository.findAll(order);
  }

  updatedDivision({ id, name, description }: Division): Bluebird<boolean> {
    if (!id && !name) {
      return Bluebird.reject(new Error('One of id and name are requirement.'));
    }

    return division_repository.findOne({ id, name }).then((db_division) => {
      if (!db_division) {
        return Bluebird.reject(new Error('The division is not found'));
      }
      return division_repository.update({ name, description });
    });
  }

  deletedDivision({ id, name }: Division): Bluebird<boolean> {
    if (!id && !name) {
      return Bluebird.reject(new Error('One of id and name is requirement.'));
    }
    const db_division = division_repository.findOne({ id, name });
    if (!db_division) {
      return Bluebird.reject(new Error('The division is not found'));
    }
    return division_repository.delete({ id });
  }
}

export { DivisionService };
