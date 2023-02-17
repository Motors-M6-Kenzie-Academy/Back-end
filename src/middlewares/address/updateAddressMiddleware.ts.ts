import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entitie";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";

export const updateAddressMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { houseNumber, complement, roadName, state, zipCode, city } = req.body;

  const userRepository = AppDataSource.getRepository(User)
  const addressRepository = AppDataSource.getRepository(Addresses)

  const addressId = req.params.id
  
  // Verificação de Address
  const allAddress = await addressRepository.find()
  const findAddress = allAddress.find(el => el.id === addressId)

  if (!findAddress) {
    throw new AppError ('Address not found', 404)
  }

  next();
};
