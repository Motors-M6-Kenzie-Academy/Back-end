import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import "reflect-metadata";
import { User } from "./entities/user.entitie";
import { Addresses } from "./entities/addresses.entitie";
import { Ads } from "./entities/ads.entitie";
import { Images } from "./entities/images.entities";
import { initial1676380903372 } from "./migrations/1676380903372-initial";
import { dev1676488705896 } from "./migrations/1676488705896-dev";
import { dev1676489554885 } from "./migrations/1676489554885-dev";
import { dev1676495481253 } from "./migrations/1676495481253-dev";
import { dev1676499519462 } from "./migrations/1676499519462-dev";

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
        migrations: [dev1676489554885, dev1676495481253, dev1676499519462],
      }
);

export default AppDataSource;
