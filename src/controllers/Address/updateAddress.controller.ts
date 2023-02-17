import { Request, Response } from "express";
import { updateAddressService } from "../../services/Address/updateAddress.services";

export const updateAddressController = async (req: Request, res: Response) => {
  try {
    const { houseNumber, complement, roadName, state, zipCode, city } =
      req.body;
    const userId = req.user.id;
    console.log(userId)
    const dataResponse = await updateAddressService({
      houseNumber,
      complement,
      roadName,
      state,
      zipCode,
      city,
      userId,
    });

    return res.status(200).json('dataResponse');
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ Error: error.message });
    }
  }
};
