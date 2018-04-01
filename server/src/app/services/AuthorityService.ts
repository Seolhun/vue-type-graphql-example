import * as Bluebird from 'bluebird';
import { Authority } from '../types';
import { AuthorityRepository } from './repository';
import { Order } from './repository/AbstractRepository';

const authority_repository = new AuthorityRepository(['id', 'name']);
class AuthorityService {
  createdAuthority({ name, level }: Authority): Bluebird<Authority>  {
    if (!name || !level) {
      return Bluebird.reject(new Error('The name and level is requirement.'));
    }

    return authority_repository.findOne({ name }).then((db_authority) => {
      if (db_authority) {
        return Bluebird.reject(new Error(`Already '${name}' is exists.`));
      }
      return authority_repository.create({ name, level });
    });
  }

  findOne({ id, name }: Authority): Bluebird<Authority | null> {
    if (!id && !name) {
      return Bluebird.reject(new Error('One of id and name is requirement.'));
    }
    return authority_repository.findOne({ id, name });
  }

  findAll(order: Order): Bluebird<Authority[]> {
    return authority_repository.findAll('DESC');
  }

  updatedAuthority({ name, level, description }: Authority): Bluebird<boolean> {
    if (!name) {
      return Bluebird.reject(new Error('id or name is requirement.'));
    }

    return authority_repository.findOne({ name }).then((db_authority) => {
      if (!db_authority) {
        return Bluebird.reject(new Error('The authority is not found'));
      }
      return authority_repository.update({ name, level, description });
    });
  }

  deletedAuthority({ id, name }: Authority): Bluebird<boolean> {
    if (!id && !name) {
      return Bluebird.reject(new Error(`id or name is requirement.`));
    }
    return authority_repository.findOne({ id, name }).then((db_authority) => {
      if (!db_authority) {
        return Bluebird.reject(new Error('The authority is not found'));
      }
      return authority_repository.delete({ id, name });
    });
  }
}

export { AuthorityService };
