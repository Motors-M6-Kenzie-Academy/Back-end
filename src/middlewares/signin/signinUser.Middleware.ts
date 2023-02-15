import { Request, Response, NextFunction } from "express";
import { compareSync } from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";

export const SignInUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  const userRepository = await AppDataSource.getRepository(User).findOne({
    where: { email: email },
  });

  if (!userRepository) {
    return res.status(400).json({ message: "Wrong Email or Password" });
  }

  if (!compareSync(password, userRepository.password)) {
    return res.status(400).json({ message: "Wrong email or password rr" });
  }

  next();
};
