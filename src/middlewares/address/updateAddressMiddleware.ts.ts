import { Request, Response, NextFunction } from "express";
import { decode } from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entitie";
import { User } from "../../entities/user.entitie";

export const updateAddressMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { houseNumber, complement, roadName, state, zipCode, city } = req.body;
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

  // Verificação de Address

  const findAddress = await AppDataSource.getRepository(Addresses).findOne({
    where: {
      userAddress: {
        id: userRepository["id"],
      },
    },
  });

  if (!findAddress) {
    return res.status(400).json({ message: "User Address not found" });
  }

  next();
};
