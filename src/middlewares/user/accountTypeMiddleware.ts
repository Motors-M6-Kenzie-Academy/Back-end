import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/appError";

const verifyUserAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accountType: string = req.user.accountType;

  if (accountType === "buyer") {
    throw new AppError("No authorization", 403);
  }

  next();
};

export default verifyUserAdmMiddleware;