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
  zipCode: string;
  state: string;
  address?: object;
  createdAt?: Date;
  updatedAt?: Date;
}

// Create User
export type IUserCreateRequest = Omit<
  IUser,
  "id" | "createdAt" | "updatedAt" | "ads"
>;
export type IUserCreateResponse = Omit<
  IUser,
  | "ads"
  | "password"
  | "roadName"
  | "houseNumber"
  | "complement"
  | "zipCode"
  | "state"
>;

// SignIn User

export type IUserSignInRequest = {
  email: string;
  password: string;
};

export type IUserSignInResponse = {
  token: string;
};
