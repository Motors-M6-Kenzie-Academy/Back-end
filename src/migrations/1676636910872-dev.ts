import { MigrationInterface, QueryRunner } from "typeorm";

export class dev1676636910872 implements MigrationInterface {
    name = 'dev1676636910872'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "images"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "typeAds" character varying NOT NULL DEFAULT 'sell'`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "image" character varying(124) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "urlImage"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "urlImage" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "description" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "typeVehicle"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "typeVehicle" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "releaseYear"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "releaseYear" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "mileage"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "mileage" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "price" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "cover"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "cover" character varying(124) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "ads" ALTER COLUMN "updatedAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" ALTER COLUMN "updatedAt" SET DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "ads" ALTER COLUMN "createdAt" SET DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "cover"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "cover" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "mileage"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "mileage" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "releaseYear"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "releaseYear" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "typeVehicle"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "typeVehicle" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "urlImage"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "urlImage" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "typeAds"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "images" character varying NOT NULL`);
    }

}
