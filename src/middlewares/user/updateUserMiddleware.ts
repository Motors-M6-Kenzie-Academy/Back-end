import { Request, Response, NextFunction } from "express";
import { decode } from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";
import { validateBirthdate } from "../../utils/validateBirthdate.utils";
import { validateCPF } from "../../utils/validateCPF.utils";
import { validatePhoneNumber } from "../../utils/validatePhoneNumber.utils";

export const updateUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { birthDate, cpf, phoneNumber } = req.body;
  
  const userId = req.params.id

  const users = await AppDataSource.getRepository(User).find();
  const user = users.find(el => el.id === userId)

  if(!user){
    throw new AppError ("User not found", 404)
  }


  // Verificação por RegEx
  const isBirthdateValid = validateBirthdate(birthDate);
  const isCPFValid = validateCPF(cpf);
  const isPhoneNumberValid = validatePhoneNumber(phoneNumber);

  if (!isBirthdateValid) {
    throw new AppError ("Wrong format for bithdate, need be igual to DD/MM/YYYY", 400)
  }

  if (!isCPFValid) {
    throw new AppError ("Wrong format for CPF, need be igual to XXX.XXX.XXX-XX", 400)
  }

  if (!isPhoneNumberValid) {
    throw new AppError ("Wrong format for phoneNumber, need be igual to +55(99)99999-9999 or +55(99)9999-9999", 400)
  }

  next();
};
