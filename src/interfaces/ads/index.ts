import { IimagesRequest } from "../images"

export interface IAdsRequest {
  description: string;
  typeVehicle: "motorbike" | "car";
  typeAds?: "sell" | "bid";
  releaseYear: string;
  mileage: string;
  price: string;
  image: string;
  images: IimagesRequest[];
}

export interface IAds extends IAdsRequest {
  id: string;
  createdAt: string;
  updatedAt: string;
}
