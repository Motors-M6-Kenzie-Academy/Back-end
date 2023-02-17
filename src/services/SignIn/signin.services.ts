import { sign } from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import {
  IUserSignInRequest,
  IUserSignInResponse,
} from "../../interfaces/users";
import jwt from "jsonwebtoken"

export const SignInService = async ({
  email,
  password,
}: IUserSignInRequest): Promise<IUserSignInResponse> => {
  const user = await AppDataSource.getRepository(User).findOne({
    where: { email: email },
  });

  const token = jwt.sign({
    accountType: user!.accountType
  },
  process.env.SECRET_KEY as string,
  {
    expiresIn: "24h",
    subject: user!.id,
  }
  )

  // const token = sign({ userRepository }, String(process.env.JWT_SECRET), {
  //   expiresIn: "1d",
  // });

  return { token };
};
