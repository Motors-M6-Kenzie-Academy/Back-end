import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import {
  IUserUpdateRequest,
  IUserUpdateResponse,
} from "../../interfaces/users";

export const updateUserService = async ({
  birthDate,
  cpf,
  description,
  email,
  name,
  phoneNumber,
  id,
}: IUserUpdateRequest): Promise<IUserUpdateResponse | null> => {
  // --- Verificação para identificar usuário.
  const user = await AppDataSource.getRepository(User).findOne({
    where: { id: id },
  });

  if (!user) return null;

  // --- Atualização dos dados recebidos por parâmetro.
  user.birthDate = birthDate || user.birthDate;
  user.cpf = cpf || user.cpf;
  user.description = description || user.description;
  user.email = email || user.email;
  user.name = name || user.name;
  user.phoneNumber = phoneNumber || user.phoneNumber;
  user.updatedAt = new Date();

  await AppDataSource.getRepository(User).update({ id: id }, { ...user });

  // --- Retorno dos dados atualizados removendo o atributo password.
  const userUpdated = await AppDataSource.getRepository(User).findOne({
    where: { id: id },
  });

  if (!userUpdated) return null;
  const { password: passwordRemove, ...userRest } = userUpdated;

  return userRest;
};
