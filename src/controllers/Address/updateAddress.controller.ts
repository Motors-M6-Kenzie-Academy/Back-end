import { Request, Response } from "express";
import { updateAddressService } from "../../services/Address/updateAddress.service";

export const updateAddressController = async (req: Request, res: Response) => {
  try {
    const { houseNumber, complement, roadName, state, zipCode, city } =
      req.body;
    // Precisa colocar middleware de verificação de token na rota
    // const { id } = req.user;
    const { id } = req.params;

    const dataResponse = await updateAddressService({
      houseNumber,
      complement,
      roadName,
      state,
      zipCode,
      city,
      id,
    });

    return res.status(200).json(dataResponse);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ Error: error.message });
    }
  }
};
