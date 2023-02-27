import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";
import { validateCPF } from "../../utils/validateCPF.utils";
import { validateBirthdate } from "../../utils/validateBirthdate.utils";
import { validatePhoneNumber } from "../../utils/validatePhoneNumber.utils";

export const updateUserInputsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // --- Dados recebidos pelo body da requisição a serem validados.
  const { birthDate, cpf, phoneNumber } = req.body;

  // --- ID do Usuário recebido por parâmetro da URL e Validação para evitar campo NULO.
  const { id } = req.user;

  if (!id) throw new AppError("User ID empty", 400);

  // --- Verificação para identificar se o usuário existe.
  const user = await AppDataSource.getRepository(User).find({
    where: { id: id },
  });

  if (!user) throw new AppError("User Not Found", 404);

  // Validações dos campos utilizando RegEx e retornando booleano nas constantes isBirthdateValid, isCPFValid, isPhoneNumberValid
  const isCPFValid = validateCPF(cpf);
  const isBirthdateValid = validateBirthdate(birthDate);
  const isPhoneNumberValid = validatePhoneNumber(phoneNumber);

  if (!isBirthdateValid)
    throw new AppError(
      "Wrong format for birthDate, need to be equal to DD/MM/YYYY",
      404
    );

  if (!isCPFValid)
    throw new AppError(
      "Wrong format for cpf, need to be equal to XXX.XXX.XXX-XX",
      404
    );

  if (!isPhoneNumberValid)
    throw new AppError(
      "Wrong format for phoneNumber, need to be equal to +55(99)99999-9999 or +55(99)9999-9999",
      404
    );

  next();
};
