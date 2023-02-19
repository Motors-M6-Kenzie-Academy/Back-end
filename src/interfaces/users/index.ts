import { IAddress } from "../address";

interface IUser {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  birthDate: string;
  description: string;
  accountType?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Modelo de Tipagem para a Função CREATE User
export interface IUserCreateRequest extends IUser, IAddress {
  password: string;
}

export interface IUserCreateResponse {
  user: IUser;
  address: IAddress;
}

// Modelo de Tipagem para a Função UPDATE User
export interface IUserUpdateRequest extends IUser {}

export interface IUserUpdateResponse extends IUser {}
