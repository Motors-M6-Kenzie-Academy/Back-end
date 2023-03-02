import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";
import crypto from "crypto";
import {
  MailService,
  ClientResponse,
  ResponseError,
  MailDataRequired,
} from "@sendgrid/mail";

type ForgotPasswordProps = {
  email: string;
  resetCode: string;
};

export const ForgotPasswordService = async ({
  email,
  resetCode,
}: ForgotPasswordProps) => {
  const user = await AppDataSource.getRepository(User).findOne({
    where: { email: email },
  });

  if (!user) throw new AppError("Email not found!", 404);

  const newPassword = crypto.randomBytes(4).toString("hex");

  const sendGrid = new MailService();
  sendGrid.setApiKey(process.env.SENDGRID_API!);

  const sendData: MailDataRequired = {
    from: "grupomotors750@gmail.com",
    to: email,
    subject: "Código de Recuperação de Senha",
    text: `Código recebido para alteração de senha: ${newPassword}`,
  };

  const response = await sendGrid.send(sendData);

  return response;
};
