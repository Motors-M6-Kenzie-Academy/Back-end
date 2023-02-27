import AppDataSource from "../../data-source";
import { sign } from "jsonwebtoken";
import { User } from "../../entities/user.entitie";
import { ISignInRequest, ISignInResponse } from "../../interfaces/signin";

export const SignInService = async ({
  email,
  password,
}: ISignInRequest): Promise<ISignInResponse> => {
  // --- Verificação se o usuário existe.
  const user = await AppDataSource.getRepository(User).findOne({
    where: { email: email },
  });

  // --- Criação de Token utilizando os dados do usuário e baseando a encriptação na chave secreta

  const token = sign(
    { accountType: user!.accountType },
    String(process.env.SECRET_KEY),
    {
      subject: user!.id,
      expiresIn: "30days",
    }
  );

  return { token };
};
