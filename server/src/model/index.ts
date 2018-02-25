interface User {
  id?: number;
  name?: string;
  email?: string;
  birth?: number;
  division_id?: number;
  division?: Division;

  active?: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

interface Division {
  id?: number;
  name?: string;
  description?: string;

  active?: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

interface Book {
  id?: number;
  name?: string;
  writer?: string;
  status?: boolean;
  description?: string;

  active?: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export { Book, Division, User };
