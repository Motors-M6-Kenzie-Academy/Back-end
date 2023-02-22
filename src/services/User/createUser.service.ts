import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entitie";
import { User } from "../../entities/user.entitie";
import { hash } from "bcrypt";
import {
  IUserCreateRequest,
  IUserCreateResponse,
} from "../../interfaces/users";

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

  // Criação de modelo de Usuário baseado na Entidade User
  const newUser = new User();
  newUser.name = name;
  newUser.email = email;
  newUser.password = await hash(password, 10);
  newUser.phoneNumber = phoneNumber;
  newUser.birthDate = birthDate;
  newUser.accountType = accountType!;
  newUser.description = description;
  newUser.cpf = cpf;

  const createNewUser = await UserRepositoy.save(newUser);

  // Criação de modelo de Usuário baseado na Entidade Address
  const newUserAddress = new Addresses();
  newUserAddress.roadName = roadName;
  newUserAddress.houseNumber = houseNumber;
  newUserAddress.complement = complement;
  newUserAddress.zipCode = zipCode;
  newUserAddress.state = state;
  newUserAddress.city = city;
  newUserAddress.userAddress = createNewUser;

  const createNewUserAdress = await AddressRepository.save(newUserAddress);

  const { password: passwordRemove, ...userRest } = createNewUser;
  const { userAddress, ...address } = createNewUserAdress;

  const response = {
    user: userRest,
    address: address,
  };

  return response;
};
