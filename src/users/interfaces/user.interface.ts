import { UUID } from "sequelize";
export class IUser {
  id?: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  phoneNumber: string;
  country: string;
}
