import { sign } from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import {
  IUserSignInRequest,
  IUserSignInResponse,
} from "../../interfaces/users";

export const SignInService = async ({
  email,
  password,
}: IUserSignInRequest): Promise<IUserSignInResponse> => {
  const userRepository = await AppDataSource.getRepository(User).findOne({
    where: { email: email },
  });

  const token = sign({ userRepository }, String(process.env.JWT_SECRET), {
    expiresIn: "1d",
  });

  return { token };
};
