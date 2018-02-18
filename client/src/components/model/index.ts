class UserModel {
  id: number;
  name: string;
  email: string;
  birth: string;
  // division: DivisionModel;
  active: boolean;

  created_at: string;
  deleted_at: string;
  updated_at: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.email = '';
    this.birth = '';
    // this.division = new DivisionModel();
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

  created_at: string;
  deleted_at: string;
  updated_at: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';

    this.created_at = '';
    this.deleted_at = '';
    this.updated_at = '';
  }
}

export { UserModel, DivisionModel };
