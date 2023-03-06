import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/user.entitie";
import { Addresses } from "./entities/addresses.entitie";
import { Ads } from "./entities/ads.entitie";
import { Comment } from "./entities/comments.entity";
import { CreateTables1677507649249 } from "./migrations/1677507649249-CreateTables";
import { UserEntityResetPassword1677852251763 } from "./migrations/1677852251763-UserEntityResetPassword";

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
        entities: [User, Ads, Addresses, Comment],
        migrations: [
          CreateTables1677507649249,
          UserEntityResetPassword1677852251763,
        ],
      }
);

export default AppDataSource;
