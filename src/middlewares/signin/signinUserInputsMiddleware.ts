import { Request, Response, NextFunction } from "express";
import { compareSync } from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";

export const signinUserInputsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // --- Dados recebidos pelo body da requisição a serem validados.
  const { email, password } = req.body;

  const user = await AppDataSource.getRepository(User).findOne({
    where: { email: email },
  });

  if (!user) throw new AppError("Wrong Email or Password", 400);

  if (!compareSync(password, user.password))
    throw new AppError("Wrong Email or Password", 400);

  next();
};
