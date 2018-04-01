import * as bcrypt from 'bcrypt';

class PasswordEncoderUtils {
  static bcryptedPasswordSync(password: string | undefined): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  static compareBcryptedPasswordSync(password: string): boolean {
    const hash = this.bcryptedPasswordSync(password);
    return bcrypt.compareSync(password, hash);
  }
}

export { PasswordEncoderUtils };
