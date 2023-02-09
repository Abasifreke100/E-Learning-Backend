import { UserRoles } from "../enums/roles.enum";

export interface IJwtAuthPayload {
  sub: number;
  role: UserRoles;
  iat: number;
  exp: number;
}
