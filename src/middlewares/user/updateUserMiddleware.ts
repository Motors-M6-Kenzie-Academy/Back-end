import { Request, Response, NextFunction } from "express";
import { decode } from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { validateBirthdate } from "../../utils/validateBirthdate.utils";
import { validateCPF } from "../../utils/validateCPF.utils";
import { validatePhoneNumber } from "../../utils/validatePhoneNumber.utils";

export const updateUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { birthDate, cpf, phoneNumber } = req.body;
  const token = req.headers.authorization;

  // Verificação de Token
  const tokenBears = token?.split(" ")[1];
  if (!token) {
    return res.status(400).json({ message: "User token empty" });
  }

  // Verificação de User
  const { userRepository }: any = decode(tokenBears as string);
  const findUser = await AppDataSource.getRepository(User).find({
    where: { id: userRepository["id"] },
  });

  if (!findUser) {
    return res.status(400).json({ message: "User not found" });
  }

  // Verificação por RegEx
  const isBirthdateValid = validateBirthdate(birthDate);
  const isCPFValid = validateCPF(cpf);
  const isPhoneNumberValid = validatePhoneNumber(phoneNumber);

  if (!isBirthdateValid) {
    return res.status(400).json({
      message: "Wrong format for bithdate, need be igual to DD/MM/YYYY",
    });
  }

  if (!isCPFValid) {
    return res.status(400).json({
      message: "Wrong format for CPF, need be igual to XXX.XXX.XXX-XX",
    });
  }

  if (!isPhoneNumberValid) {
    return res.status(400).json({
      message:
        "Wrong format for phoneNumber, need be igual to +55(99)99999-9999 or +55(99)9999-9999",
    });
  }

  next();
};
