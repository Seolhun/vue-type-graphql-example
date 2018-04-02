import * as Bluebird from 'bluebird';

import { User } from '../types';
import { PasswordEncoderUtils } from '../utils/PasswordEncoderUtils';
import { UserRepository } from './repository';
import { Order } from './repository/AbstractRepository';

const user_repository = new UserRepository(['id', 'email', 'name', 'github_id', 'google_id', 'facebook_id']);
class UserService {
  // Basic
  createdUser({ email, name, birth, password, division_id, google_id, github_id, facebook_id }: User): Bluebird<User>  {
    if (!email) {
      return Bluebird.reject(new Error('The email is requirement.'));
    }
    if (!name) {
      return Bluebird.reject(new Error('The name are requirement.'));
    }
    if (!birth) {
      return Bluebird.reject(new Error('The birth are requirement.'));
    }
    if (!password) {
      return Bluebird.reject(new Error('The password are requirement.'));
    }
    if (!division_id) {
      return Bluebird.reject(new Error('The division_id are requirement.'));
    }

    return user_repository.findOne({ email, name }).then((db_user) => {
      if (db_user) {
        if (db_user.email === email) {
          return Bluebird.reject(new Error(`Already the '${email}' are exists.`));
        }
        if (db_user.name === name) {
          return Bluebird.reject(new Error(`Already the '${name}' are exists.`));
        }
      }

      password = PasswordEncoderUtils.bcryptedPasswordSync(password);
      return user_repository.create({ email, name, birth, password, division_id, google_id, github_id, facebook_id });
    });
  }

  findOne({ id, email, name, google_id, github_id, facebook_id }: User): Bluebird<User | null> {
    if (!id && !email && !name && !google_id && !github_id && !facebook_id) {
      return Bluebird.reject(new Error('One of id and email, name are requirement.'));
    }
    return user_repository.findOne({ id, email, name, google_id, github_id, facebook_id });
  }

  findAll(order: Order): Bluebird<User[]> {
    return user_repository.findAll('DESC');
  }

  updatedUser({ id, email, birth, name, division_id }: User): Bluebird<boolean> {
    if (!id && !email) {
      return Bluebird.reject(new Error('id or email are requirement.'));
    }

    return user_repository.findOne({ id, email }).then((db_user) => {
      if (!db_user) {
        return Bluebird.reject(new Error('The user are not found'));
      }
      return user_repository.update({ email, birth, name, division_id });
    });
  }

  deletedUser({ id, email }: User): Bluebird<boolean> {
    if (!id && !email) {
      return Bluebird.reject(new Error(`id or email are requirement.`));
    }
    return user_repository.findOne({ id, email }).then((db_user) => {
      if (!db_user) {
        return Bluebird.reject(new Error('The user are not found'));
      }
      return user_repository.delete({ id, email });
    });
  }

  // Custom
  createdUserWithOauth2({ email, name, division_id, google_id, github_id, facebook_id }: User): Bluebird<User>  {
    if (!name) {
      return Bluebird.reject(new Error('The name are requirement.'));
    }

    return user_repository.findOne({ email, name, google_id, github_id, facebook_id }).then((db_user) => {
      if (db_user) {
        return Bluebird.resolve(db_user);
      }
      return user_repository.create({ email, name, division_id, google_id, github_id, facebook_id });
    });
  }

  loginUser({ email, name, password }: User): Bluebird<User> {
    if (!email && !name) {
      return Bluebird.reject(new Error('One of email and name are requirement.'));
    }

    let password_validation = false;
    return user_repository.findOne({ email, name }).then((db_user: any) => {
      if (password) {
        password_validation = PasswordEncoderUtils.compareBcryptedPasswordSync(password, db_user.password);
        if (!password_validation) {
          return Bluebird.reject(new Error('The identification or Password is not right'));
        }
        return Bluebird.resolve(db_user);
      }
      return Bluebird.reject(new Error('The identification or Password is not right'));
    });
  }
}

export { UserService };
