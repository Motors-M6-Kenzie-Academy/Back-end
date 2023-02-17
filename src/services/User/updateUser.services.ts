import { decode } from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { IUserUpdateRequest } from "../../interfaces/users";

export const updateUserService = async ({
  userId,
  birthDate,
  cpf,
  description,
  email,
  name,
  phoneNumber,
}: IUserUpdateRequest) => {

  // // Validação de Token
  // const tokenBears = token?.split(" ")[1];

  // // Verificação de User
  // const { userRepository }: any = decode(tokenBears as string);
  const findUser = await AppDataSource.getRepository(User).findOne({
    where: { id: userId },
  });

  if (!findUser) return;

  // Update de dados
  findUser.birthDate = birthDate || findUser.birthDate;
  findUser.cpf = cpf || findUser.cpf;
  findUser.description = description || findUser.description;
  findUser.email = email || findUser.email;
  findUser.name = name || findUser.name;
  findUser.phoneNumber = phoneNumber || findUser.phoneNumber;
  findUser.updatedAt = new Date();

  const userUpdated = await AppDataSource.getRepository(User).update(
    { id: userId },
    { ...findUser }
  );

  // Retorno de objeto com dados atualizados
  const user = await AppDataSource.getRepository(User).findOne({
    where: { id: userId },
  });

  if (!user) return;
  const { password: passwordRemove, ...userRest } = user;

  return userRest;
};
