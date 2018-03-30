class Authority {
  id: number;
  name: string;
  level: number;
  description: string;

  active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;

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
  id: number;
  name: string;
  writer: string;
  description: string;
  status: boolean;

  active: boolean;
  created_at: string;
  deleted_at: string;
  updated_at: string;

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
  id: number;
  name: string;
  description: string;

  active: boolean;
  created_at: string;
  deleted_at: string;
  updated_at: string;

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
  id: number;
  name: string;
  email: string;
  password: string;
  birth: string;
  division_id: number;
  division: DivisionModel;

  active: boolean;
  created_at: string;
  deleted_at: string;
  updated_at: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.email = '';
    this.birth = '';
    this.division_id = 0;
    this.division = new DivisionModel();

    this.active = true;
    this.created_at = '';
    this.deleted_at = '';
    this.updated_at = '';
  }
}

export { BookModel, DivisionModel, UserModel };
