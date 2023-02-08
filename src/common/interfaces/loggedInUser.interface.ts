export interface ILoggedInUser {
  sub: number;
  role: string;
  refreshToken?: string;
}
