// Tipagem User
export interface IUser {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  password: string;
  birthDate: string;
  accountType: string;
  description: string;
  roadName: string;
  houseNumber: number;
  complement: string;
  city: string;
  zipCode: string;
  state: string;
  address?: object;
  createdAt?: Date;
  updatedAt?: Date;
  token?: string;
}

// Create User
export type IUserCreateRequest = Omit<
  IUser,
  "id" | "createdAt" | "updatedAt" | "ads" | "token"
>;
export type IUserCreateResponse = Omit<
  IUser,
  | "token"
  | "ads"
  | "password"
  | "roadName"
  | "houseNumber"
  | "complement"
  | "zipCode"
  | "state"
  | "city"
>;

// Update User
export type IUserUpdateRequest = Omit<
  IUser,
  | "id"
  | "password"
  | "accountType"
  | "roadName"
  | "houseNumber"
  | "complement"
  | "zipCode"
  | "state"
  | "address"
  | "createdAt"
  | "updatedAt"
  | "city"
>;

// Update User Address
export type IAddressUpdateRequest = Omit<
  IUser,
  | "id"
  | "password"
  | "accountType"
  | "createdAt"
  | "updatedAt"
  | "name"
  | "email"
  | "cpf"
  | "phoneNumber"
  | "birthDate"
  | "description"
  | "address"
>;

// SignIn User

export type IUserSignInRequest = {
  email: string;
  password: string;
};

export type IUserSignInResponse = {
  token: string;
};
