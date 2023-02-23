import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";
import { validateBirthdate } from "../../utils/validateBirthdate.utils";
import { validateCPF } from "../../utils/validateCPF.utils";
import { validatePhoneNumber } from "../../utils/validatePhoneNumber.utils";
import { validateZipCode } from "../../utils/validateZipCode.utils";

export const createUserInputsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accountType, birthDate, email, cpf, phoneNumber, zipCode } = req.body;

  // --- Verificação de email existe, constante emailAlreadyExists retorna um booleano e em seguida validação.
  const emailAlreadyExists = await AppDataSource.getRepository(User).findOne({
    where: { email: email },
  });

  if (emailAlreadyExists)
    throw new AppError("User email already registed", 400);

  // --- Verificação de CPF existe, constante cpfAlreadyExists retorna um booleano e em seguida validação.
  const cpfAlreadyExists = await AppDataSource.getRepository(User).findOne({
    where: { cpf: cpf },
  });

  if (cpfAlreadyExists) throw new AppError("User CPF already registed", 400);

  const cpfValidated = validateCPF(cpf);

  if (!cpfValidated)
    throw new AppError(
      "Wrong format for CPF, need be igual to XXX.XXX.XXX-XX",
      400
    );

  // --- Verificação do Tipo de Conta do usuário atravez de comparação.
  if (
    accountType.toLowerCase() !== "comprador" &&
    accountType.toLowerCase() !== "anunciante"
  )
    throw new AppError(
      "Account type not equals to Comprador or Anunciante",
      400
    );

  // -- Verificação do formato de Data utilizando RegEx retornando um booleano na constante validatedBirthdate e em seguida validação.

  const validatedBirthdate = validateBirthdate(birthDate);

  if (!birthDate)
    throw new AppError(
      "Wrong format for bithdate, need be igual to DD/MM/YYYY",
      400
    );

  if (!validatedBirthdate)
    throw new AppError(
      "Wrong format for bithdate, need be igual to DD/MM/YYYY",
      400
    );

  // Verificação do formato de Telefone utilizando RegEx retornando um booleano na constante validatedPhoneNumber e em seguida validação.

  const validatedPhoneNumber = validatePhoneNumber(phoneNumber);

  if (!validatedPhoneNumber)
    throw new AppError(
      "Wrong format for phoneNumber, need be igual to +55(99)99999-9999 or +55(99)9999-9999",
      400
    );

  // Verificação do formato de ZipCode utilizando RegEx retornando um booleano na constante validatedZipCode e em seguida validação.
  const validatedZipCode = validateZipCode(zipCode);

  if (!validatedZipCode)
    throw new AppError(
      "Wrong format for zipCode, need be igual to 99999-999",
      400
    );

  next();
};
