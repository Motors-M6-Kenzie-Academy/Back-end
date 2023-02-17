import { decode } from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entitie";
import { IAddressUpdateRequest } from "../../interfaces/users";

export const updateAddressService = async ({
  city,
  complement,
  houseNumber,
  roadName,
  state,
  zipCode,
  token,
}: IAddressUpdateRequest): Promise<Addresses | null> => {
  const tokenBears = token?.split(" ")[1];

  const { userRepository }: any = decode(tokenBears as string);

  const findAddress = await AppDataSource.getRepository(Addresses).findOne({
    where: {
      userAddress: {
        id: userRepository["id"],
      },
    },
  });

  if (!findAddress) return null;

  findAddress.city = city || findAddress.city;
  findAddress.complement = complement || findAddress.complement;
  findAddress.houseNumber = houseNumber || findAddress.houseNumber;
  findAddress.roadName = roadName || findAddress.roadName;
  findAddress.state = state || findAddress.state;
  findAddress.zipCode = zipCode || findAddress.zipCode;
  findAddress.updatedAt = new Date();

  const addressUpdated = await AppDataSource.getRepository(Addresses).update(
    { userAddress: { id: userRepository["id"] } },
    { ...findAddress }
  );

  const address = await AppDataSource.getRepository(Addresses).findOne({
    where: {
      userAddress: {
        id: userRepository["id"],
      },
    },
  });

  return address;
};
