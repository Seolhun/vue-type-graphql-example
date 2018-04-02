interface Authority {
  id?: number;
  name?: string;
  level?: number;
  description?: string;

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
  author?: string;
  status?: BookStatus;
  description?: string;

  active?: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

enum BookStatus {
  GONE = 0,
  REQUESTED = 1,
  ORDERED = 2,
  NORMAL = 3,
  BORROWED = 4,
}

interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  birth?: string;

  division_id?: number;
  division?: Division;

  google_id?: string;
  github_id?: string;
  facebook_id?: string;

  active?: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

interface UserAuthority {
  id?: number;
  user_id?: number;
  user?: User;
  authority_id?: number;
  authority?: Authority;

  active?: boolean;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export { Authority, Book, BookStatus, Division, User, UserAuthority };
