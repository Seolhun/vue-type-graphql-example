import { User } from "../types";
import { PasswordEncoderUtils } from "../utils/PasswordEncoderUtils";
import { UserRepository } from "./repository";
import { Order } from "./repository/AbstractRepository";

const userRepository = new UserRepository([
  "id",
  "email",
  "name",
  "github_id",
  "google_id",
  "facebook_id"
]);
class UserService {
  // Basic
  createdUser = async ({
    email,
    name,
    birth,
    password,
    division_id,
    google_id,
    github_id,
    facebook_id
  }: User) => {
    if (!email) {
      return new Error("The email is requirement.");
    }
    if (!name) {
      return new Error("The name are requirement.");
    }
    if (!birth) {
      return new Error("The birth are requirement.");
    }
    if (!password) {
      return new Error("The password are requirement.");
    }
    if (!division_id) {
      return new Error("The division_id are requirement.");
    }

    const dbUser = await userRepository.findOne({ email, name });
    if (dbUser) {
      if (dbUser.get("email") === email) {
        return new Error(`Already the '${email}' are exists.`);
      }
      if (dbUser.get("name") === name) {
        return new Error(`Already the '${name}' are exists.`);
      }
    }

    const bcryptedPassword = PasswordEncoderUtils.bcryptedPasswordSync(
      password
    );
    return userRepository.create({
      email,
      name,
      birth,
      password: bcryptedPassword,
      division_id,
      google_id,
      github_id,
      facebook_id
    });
  };

  findOne({ id, email, name, google_id, github_id, facebook_id }: User) {
    if (!id && !email && !name && !google_id && !github_id && !facebook_id) {
      return Promise.reject(
        new Error("One of id and email, name are requirement.")
      );
    }
    return userRepository.findOne({
      id,
      email,
      name,
      google_id,
      github_id,
      facebook_id
    });
  }

  findAll(order: Order) {
    return userRepository.findAll("DESC");
  }

  updatedUser({ id, email, birth, name, division_id }: User) {
    if (!id && !email) {
      return Promise.reject(new Error("id or email are requirement."));
    }

    return userRepository.findOne({ id, email }).then(dbUser => {
      if (!dbUser) {
        return Promise.reject(new Error("The user are not found"));
      }
      return userRepository.update({ email, birth, name, division_id });
    });
  }

  deletedUser({ id, email }: User) {
    if (!id && !email) {
      return Promise.reject(new Error(`id or email are requirement.`));
    }
    return userRepository.findOne({ id, email }).then(dbUser => {
      if (!dbUser) {
        return Promise.reject(new Error("The user are not found"));
      }
      return userRepository.delete({ id, email });
    });
  }

  // Custom
  createdUserWithOauth2({
    email,
    name,
    division_id,
    google_id,
    github_id,
    facebook_id
  }: User) {
    if (!name) {
      return Promise.reject(new Error("The name are requirement."));
    }

    return userRepository
      .findOne({ email, name, google_id, github_id, facebook_id })
      .then(dbUser => {
        if (dbUser) {
          return Promise.resolve(dbUser);
        }
        return userRepository.create({
          email,
          name,
          division_id,
          google_id,
          github_id,
          facebook_id
        });
      });
  }

  loginUser({ email, name, password }: User) {
    if (!email && !name) {
      return Promise.reject(
        new Error("One of email and name are requirement.")
      );
    }

    let password_validation = false;
    return userRepository.findOne({ email, name }).then((dbUser: any) => {
      if (password) {
        password_validation = PasswordEncoderUtils.compareBcryptedPasswordSync(
          password,
          dbUser.password
        );
        if (!password_validation) {
          return Promise.reject(
            new Error("The identification or Password is not right")
          );
        }
        return Promise.resolve(dbUser);
      }
      return Promise.reject(
        new Error("The identification or Password is not right")
      );
    });
  }
}

export { UserService };
