import { IimagesRequest } from "../images";

export interface IAdsRequest {
  description: string;
  typeVehicle: string;
  releaseYear: string;
  mileage: string;
  price: string;
  image: string;
  images: IimagesRequest[];
}
