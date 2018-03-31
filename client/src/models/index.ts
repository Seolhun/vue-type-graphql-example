import { Validators } from '../utils/Validators';

class AuthorityModel {
  id?: number;
  name?: string;
  level?: number;
  description?: string;

  active?: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.level = 0;
    this.description = '';

    this.active = true;
    this.created_at = '';
    this.deleted_at = '';
    this.updated_at = '';
  }
}

class BookModel {
  id?: number;
  name?: string;
  writer?: string;
  description?: string;
  status?: boolean;

  active?: boolean;
  created_at?: string;
  deleted_at?: string;
  updated_at?: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.writer = '';
    this.description = '';
    this.status = true;

    this.active = true;
    this.created_at = '';
    this.deleted_at = '';
    this.updated_at = '';
  }
}

class DivisionModel {
  id?: number;
  name?: string;
  description?: string;

  active?: boolean;
  created_at?: string;
  deleted_at?: string;
  updated_at?: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';

    this.active = true;
    this.created_at = '';
    this.deleted_at = '';
    this.updated_at = '';
  }
}

class UserModel {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  confirm_password?: string;

  birth?: string;
  division_id?: number;
  division?: DivisionModel;

  active?: boolean;
  created_at?: string;
  deleted_at?: string;
  updated_at?: string;

  validation?: {
    email: string,
    name: string,
    password: string,
    confirm_password: string,
  };
  is_active?: boolean;
  is_submit?: boolean;

  constructor() {
    this.id = 0;
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirm_password = '';

    this.birth = '';
    this.division_id = 0;
    this.division = new DivisionModel();

    this.active = true;
    this.created_at = '';
    this.deleted_at = '';
    this.updated_at = '';
  }
}

export { AuthorityModel, BookModel, DivisionModel, UserModel };
