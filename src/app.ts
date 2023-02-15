import "express-async-errors";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import { appRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use(cors());
appRoutes(app);

export default app;
