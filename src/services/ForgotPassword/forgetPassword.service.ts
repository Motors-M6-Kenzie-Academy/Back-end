import nodemailer from "nodemailer";
import AppDataSource from "../../data-source";
import { hash } from "bcrypt";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";

export const verifyEmailService = async (email: string): Promise<User> => {
  const user = await AppDataSource.getRepository(User).findOne({
    where: { email: email },
  });
  if (!user) throw new AppError("Email not found!", 404);
  return user;
};

export const sendResetCodeEmailService = async (
  newResetCode: string,
  email: string
) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: "grupomotors750@gmail.com",
    to: email,
    subject: "Código de Recuperação de Senha",
    text: `Código para alteração de senha: ${newResetCode}`,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Erro ao Enviar email: " + error);
      return error;
    }
    if (info) {
      console.log("Email send: " + info.response);
      return info.response;
    }
  });

  await AppDataSource.getRepository(User).update(
    { email: email },
    { resetCode: newResetCode }
  );
};

export const verifyCodeService = async (
  code: string,
  email: string
): Promise<boolean> => {
  const isUser = await verifyEmailService(email);

  return isUser.resetCode === code;
};

export const UpdatedNewPassService = async (
  newPass: string,
  email: string
): Promise<User> => {
  const isUser = await verifyEmailService(email);

  isUser.password = await hash(newPass, 10);
  isUser.updatedAt = new Date();

  await AppDataSource.getRepository(User).update(
    { email: email },
    { ...isUser }
  );

  const userUpdated = await verifyEmailService(email);
  return userUpdated;
};
