import { Request, Response } from "express";
import { ForgotPasswordService } from "../../services/ForgotPassword/forgetPassword.service";

export const ForgotPasswordController = async (req: Request, res: Response) => {
  try {
    const { email, resetCode } = req.body;

    const dataResponse = await ForgotPasswordService({ email, resetCode });

    return res.status(200).json(dataResponse);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ Error: error.message });
    }
  }
};
