export interface JwtResponse {
  user: {
    id: number;
    username: string;
    token: string;
    expires_in?: number;
  };
}
