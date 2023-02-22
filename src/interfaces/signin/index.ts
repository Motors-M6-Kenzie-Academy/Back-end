interface ISignIn {
  email: string;
  password: string;
}

export interface ISignInRequest extends ISignIn {}

export interface ISignInResponse {
  token: string;
}
