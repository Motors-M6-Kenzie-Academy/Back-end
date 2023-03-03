import { Request, Response } from "express";
import crypto from "crypto";
import {
  sendResetCodeEmailService,
  UpdatedNewPassService,
  verifyCodeService,
  verifyEmailService,
} from "../../services/ForgotPassword/forgetPassword.service";
import { AppError } from "../../errors/appError";

export const ForgotPasswordController = async (req: Request, res: Response) => {
  try {
    const { email, code, newPass } = req.body;

    const newResetCode = crypto.randomBytes(4).toString("hex").toUpperCase();

    if (newPass) {
      const response = await UpdatedNewPassService(newPass, email);
      console.log(response);
      return res.status(200).json(response);
    }

    if (code) {
      const isValidCode = await verifyCodeService(code, email);

      if (!isValidCode) throw new AppError("Código inválido");

      return res.status(200).json(isValidCode);
    }

    if (email) {
      const resp = await verifyEmailService(email);

      if (resp) {
        const sendEmail = await sendResetCodeEmailService(newResetCode, email);
      }

      return res.status(200).json(resp);
    }

    return res.status(200).json(code);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ Error: error.message });
    }
  }
};
