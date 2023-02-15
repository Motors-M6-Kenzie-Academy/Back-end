import { IAddressRequest } from "../address";

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phoneNumber: string;
  birthDate: string;
  description: string;
  accountType: string;
  isAdm?: string;
  isActive?: string;
}
