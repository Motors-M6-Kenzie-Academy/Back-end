import { Request, Response, NextFunction } from "express";
import { decode, verify } from "jsonwebtoken";
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
      message: "Missing token",
    });
  }

  verify(
    token as string,
    process.env.SECRET_KEY as string,
    (error, decoded: any) => {
      if (error) {
        throw new AppError("Invalid Token", 401);
      }
      req.user = {
        accountType: decoded.accountType,
        id: decoded.sub,
      };
      next();
    }
  );
};

export default checkTokenMiddleware;
