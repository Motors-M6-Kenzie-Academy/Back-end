import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entitie";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";
import { validateZipCode } from "../../utils/validateZipCode.utils";

export const updateAddressInputsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { zipCode } = req.body;
  // Precisa colocar middleware de verificação de token na rota
  // const { id } = req.user;
  const { id } = req.params;

  // --- Verificação para identificar se usuário existe.
  const user = await AppDataSource.getRepository(User).find({
    where: { id: id },
  });

  if (!user) throw new AppError("User Not Found", 404);

  // --- Verificação para identificar se endereço existe.

  const findAddress = await AppDataSource.getRepository(Addresses).findOne({
    where: {
      userAddress: {
        id: id,
      },
    },
  });

  if (!findAddress) throw new AppError("User Address not found", 404);

  // Verificação do formato de ZipCode utilizando RegEx retornando um booleano na constante validatedZipCode e em seguida validação.
  if (zipCode) {
    const validatedZipCode = validateZipCode(zipCode);

    if (!validatedZipCode)
      throw new AppError(
        "Wrong format for zipCode, need be igual to 99999-999",
        400
      );
  }

  next();
};
