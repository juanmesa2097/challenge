export interface User {
  username: string;
  password: string;
  details?: UserDetails;
}

export interface UserDetails {
  firstName?: string;
  lastName?: string;
}
