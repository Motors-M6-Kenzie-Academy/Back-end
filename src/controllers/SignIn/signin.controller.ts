import { Request, Response } from "express";
import { SignInService } from "../../services/SignIn/signin.services";
export default async function SignInController(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const dataResponse = await SignInService({ email, password });

    return res.status(200).json(dataResponse);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ Error: error.message });
    }
  }
}
