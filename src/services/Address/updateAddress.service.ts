import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entitie";
import {
  IAddressUpdateRequest,
  IAddressUpdateResponse,
} from "../../interfaces/address";

export const updateAddressService = async ({
  city,
  complement,
  houseNumber,
  roadName,
  state,
  zipCode,
  id,
}: IAddressUpdateRequest): Promise<IAddressUpdateResponse | null> => {
  // --- Verificação para identificar se ID corresponde ao usuário
  const findUserAddress = await AppDataSource.getRepository(Addresses).findOne({
    where: {
      userAddress: {
        id: id,
      },
    },
  });

  if (!findUserAddress) return null;

  // --- Update de dados recebidos como parâmetros da requisição.
  findUserAddress.city = city || findUserAddress.city;
  findUserAddress.complement = complement || findUserAddress.complement;
  findUserAddress.houseNumber = houseNumber || findUserAddress.houseNumber;
  findUserAddress.roadName = roadName || findUserAddress.roadName;
  findUserAddress.state = state || findUserAddress.state;
  findUserAddress.zipCode = zipCode || findUserAddress.zipCode;
  findUserAddress.updatedAt = new Date();

  await AppDataSource.getRepository(Addresses).update(
    { userAddress: { id: id } },
    { ...findUserAddress }
  );

  // Retorno de dados Atualizados do Address.
  const userAddressUpdated = await AppDataSource.getRepository(
    Addresses
  ).findOne({
    where: {
      userAddress: {
        id: id,
      },
    },
  });

  return userAddressUpdated;
};
