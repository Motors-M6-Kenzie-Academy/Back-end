import { Request, Response, NextFunction } from "express";
import jwt, { decode, verify } from "jsonwebtoken";
import "dotenv/config";
import { IUserUpdateResponse } from "../../interfaces/users";
import { AppError } from "../../errors/appError";

const checkTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  token = token.split(" ")[1];

  verify(token, process.env.JWT_SECRET as string, (error, decoded: any) => {
    if (error) {
      throw new AppError("Invalid Token", 401);
    }
    req.user = {
      accountType: decoded["user"]["accountType"],
      id: decoded["user"]["id"],
    };
  });

  next();
};

export default checkTokenMiddleware;
