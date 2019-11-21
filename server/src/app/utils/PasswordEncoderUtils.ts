import bcrypt from "bcryptjs";

class PasswordEncoderUtils {
  static bcryptedPasswordSync(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  static compareBcryptedPasswordSync(
    password: string,
    db_password: string
  ): boolean {
    return bcrypt.compareSync(password, db_password);
  }
}

export { PasswordEncoderUtils };
