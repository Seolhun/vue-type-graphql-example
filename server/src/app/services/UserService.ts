import Bluebird from 'bluebird';
import { User } from '../types';
import { UserRepository } from './repository';
import { Order } from './repository/AbstractRepository';

const user_repository = new UserRepository();
class UserService {
  createdUser({ email, birth, name, division_id }: User): Bluebird<User>  {
    if (!email && !name) {
      return Bluebird.reject(new Error('One of email, name is requirement.'));
    }

    return user_repository.findOne({ email, name }).then((db_user) => {
      if (db_user) {
        if (email && db_user.email === email) {
          return Bluebird.reject(new Error(`Already '${email}' is existed.`));
        } else if (name && db_user.name === name) {
          return Bluebird.reject(new Error(`Already '${name}' is existed.`));
        }
        return Bluebird.reject(new Error(`Already '${email || name}' is existed.`));
      }
      return user_repository.create({ email, birth, name, division_id });
    });
  }

  findOne({ id, email, name }: User): Bluebird<User | null> {
    if (!id && !email && !name) {
      return Bluebird.reject(new Error('One of id and email, name is requirement.'));
    }
    return user_repository.findOne({ id, email, name });
  }

  findAll(order: Order): Bluebird<User[]> {
    return user_repository.findAll('DESC');
  }

  updatedUser({ id, email, birth, name, division_id }: User): Bluebird<boolean> {
    if (!id && !email) {
      return Bluebird.reject(new Error('id or email is requirement.'));
    }

    return user_repository.findOne({ id, email }).then((db_user) => {
      if (!db_user) {
        return Bluebird.reject(new Error('The user is not found'));
      }
      return user_repository.update({ email, birth, name, division_id });
    });
  }

  deletedUser({ id, email }: User): Bluebird<boolean> {
    if (!id && !email) {
      return Bluebird.reject(new Error(`id or email is requirement.`));
    }
    return user_repository.findOne({ id, email }).then((db_user) => {
      if (!db_user) {
        return Bluebird.reject(new Error('The user is not found'));
      }
      return user_repository.delete({ id, email });
    });
  }
}

export { UserService };
