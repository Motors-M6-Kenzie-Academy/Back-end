import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { validateBirthdate } from "../../utils/validateBirthdate.utils";
import { validateCPF } from "../../utils/validateCPF.utils";
import { validatePhoneNumber } from "../../utils/validatePhoneNumber.utils";
import { validateZipCode } from "../../utils/validateZipCode.utils";

export const createUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accountType, birthDate, email, cpf, phoneNumber, zipCode } = req.body;

  // Verificação de email
  const emailAlreadyExists = await AppDataSource.getRepository(User).findOne({
    where: { email: email },
  });

  if (emailAlreadyExists) {
    return res.status(400).json({ message: "User email already registed" });
  }

  // Verificação de CPF e Validação RegEX
  const cpfAlreadyExists = await AppDataSource.getRepository(User).findOne({
    where: { cpf: cpf },
  });

  if (cpfAlreadyExists) {
    return res.status(400).json({ message: "User CPF already registed" });
  }

  const cpfValidated = validateCPF(cpf);

  if (!cpfValidated) {
    return res.status(400).json({
      message: "Wrong format for CPF, need be igual to XXX.XXX.XXX-XX",
    });
  }

  // Verificação do Tipo de Conta do usuário
  if (
    accountType.toLowerCase() !== "comprador" &&
    accountType.toLowerCase() !== "anunciante"
  ) {
    return res.status(400).json({
      message: "Account type not iquals to Comprador or Anunciante",
    });
  }

  // Verificação do formato de Data

  const validatedBirthdate = validateBirthdate(birthDate);

  if (!birthDate) {
    return res.status(400).json({
      message: "Wrong format for bithdate, need be igual to DD/MM/YYYY",
    });
  }

  if (!validatedBirthdate) {
    return res.status(400).json({
      message: "Wrong format for bithdate, need be igual to DD/MM/YYYY",
    });
  }

  // Verificação de Número de Telefone

  const validatedPhoneNumber = validatePhoneNumber(phoneNumber);

  if (!validatedPhoneNumber) {
    return res.status(400).json({
      message:
        "Wrong format for phoneNumber, need be igual to +55(99)99999-9999 or +55(99)9999-9999",
    });
  }

  // Verificação de ZipCode
  const validatedZipCode = validateZipCode(zipCode);

  if (!validatedZipCode) {
    return res.status(400).json({
      message: "Wrong format for zipCode, need be igual to 99999-999",
    });
  }

  next();
};
