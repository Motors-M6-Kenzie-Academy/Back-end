import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/user.entitie";
import { Addresses } from "./entities/addresses.entitie";
import { Ads } from "./entities/ads.entitie";
import { createTables1677242630764 } from "./migrations/1677242630764-createTables";


const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.HOST,
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: false,
        synchronize: false,
        entities: [User, Ads, Addresses],
        migrations: [
          createTables1677242630764
        ],
      }
);

export default AppDataSource;
