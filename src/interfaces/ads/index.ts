import { Iimages, IimagesRequest } from "../images";
import { IUserRequest } from "../users";

export interface IAdsRequest {
  description: string;
  typeVehicle: "motorbike" | "car";
  typeAds?: "sell" | "bid";
  releaseYear: string;
  mileage: string;
  price: string;
  cover: string;
  images: IimagesRequest[];
}

export interface IAds extends IAdsRequest {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAdsUpdate {
  description?: string;
  typeVehicle?: "motorbike" | "car";
  typeAds?: "sell" | "bid";
  releaseYear?: string;
  mileage?: string;
  price?: string;
  cover?: string;
  images?: Iimages[];
}
