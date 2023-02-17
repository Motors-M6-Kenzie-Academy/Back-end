import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entitie";
import { User } from "../../entities/user.entitie";
import {
  IUserCreateRequest,
  IUserCreateResponse,
} from "../../interfaces/users";
import { hash } from "bcrypt";

export const createUserService = async ({
  accountType,
  birthDate,
  email,
  name,
  cpf,
  password,
  phoneNumber,
  description,
  houseNumber,
  city,
  complement,
  roadName,
  state,
  zipCode,
}: IUserCreateRequest): Promise<IUserCreateResponse> => {
  const UserRepositoy = AppDataSource.getRepository(User);
  const AddressRepository = AppDataSource.getRepository(Addresses);

  // Instância para se criar o usuário no molde da entidade User
  const newUser = new User();
  newUser.name = name;
  newUser.email = email;
  newUser.password = await hash(password, 10);
  newUser.phoneNumber = phoneNumber;
  newUser.birthDate = birthDate;
  newUser.accountType = accountType;
  newUser.description = description;
  newUser.cpf = cpf;

  const createNewUser = await UserRepositoy.save(newUser);

  // Instância para se criar o Address no molde da entidade Address
  const newUserAddress = new Addresses();
  newUserAddress.roadName = roadName;
  newUserAddress.houseNumber = houseNumber;
  newUserAddress.complement = complement;
  newUserAddress.zipCode = zipCode;
  newUserAddress.state = state;
  newUserAddress.city = city;
  newUserAddress.userAddress = createNewUser;

  const createNewUserAdress = await AddressRepository.save(newUserAddress);

  const { password: passwordRemove, ...user } = createNewUser;
  const { userAddress, ...address } = createNewUserAdress;

  const dataResponse = { ...user, address };

  return dataResponse;
};
