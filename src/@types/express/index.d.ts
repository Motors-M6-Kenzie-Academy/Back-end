import * as express from "express";
import { IAdsRequest } from "../../interfaces/ads";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        isAdm: boolean;
      };
      newAds: IAdsRequest;
    }
  }
}
