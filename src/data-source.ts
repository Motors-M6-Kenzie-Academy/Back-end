import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import "reflect-metadata";
import { User } from "./entities/user.entitie";
import { Addresses } from "./entities/addresses.entitie";
import { Ads } from "./entities/ads.entitie";
import { Images } from "./entities/images.entities";
import { initial1676380903372 } from "./migrations/1676380903372-initial";
import { dev1676582322256 } from "./migrations/1676582322256-dev";

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
        logging: true,
        synchronize: false,
        entities: [User, Ads, Addresses, Images],
        migrations: [dev1676582322256],
      }
);

export default AppDataSource;
