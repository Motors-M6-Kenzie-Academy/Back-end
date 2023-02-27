import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1677507649249 implements MigrationInterface {
    name = 'CreateTables1677507649249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "content" character varying(120) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "adId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ads" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(120) NOT NULL, "description" character varying(120) NOT NULL, "typeVehicle" character varying(10) NOT NULL, "isPublished" boolean NOT NULL DEFAULT true, "typeAds" character varying NOT NULL DEFAULT 'sell', "releaseYear" character varying(50) NOT NULL, "mileage" character varying(50) NOT NULL, "price" character varying(50) NOT NULL, "cover" character varying(124) NOT NULL, "gallery_image" character varying(124) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_a7af7d1998037a97076f758fc23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "roadName" character varying(100) NOT NULL, "houseNumber" integer NOT NULL, "complement" character varying(100) NOT NULL, "zipCode" character varying(9) NOT NULL, "state" character varying(50) NOT NULL, "city" character varying(100) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "refUserID" uuid, CONSTRAINT "REL_9c9803d95923a9cb44ba94acb6" UNIQUE ("refUserID"), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "password" character varying(100) NOT NULL, "phoneNumber" character varying(17) NOT NULL, "birthDate" character varying(17) NOT NULL, "description" character varying(250) NOT NULL, "accountType" character varying(10) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_f1ca1f4ecd02811179c26b6d664" FOREIGN KEY ("adId") REFERENCES "ads"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ads" ADD CONSTRAINT "FK_e72da72588dc5b91427a9adda71" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_9c9803d95923a9cb44ba94acb6f" FOREIGN KEY ("refUserID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_9c9803d95923a9cb44ba94acb6f"`);
        await queryRunner.query(`ALTER TABLE "ads" DROP CONSTRAINT "FK_e72da72588dc5b91427a9adda71"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_f1ca1f4ecd02811179c26b6d664"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "ads"`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }

}
