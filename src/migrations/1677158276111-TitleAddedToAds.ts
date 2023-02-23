import { MigrationInterface, QueryRunner } from "typeorm";

export class TitleAddedToAds1677158276111 implements MigrationInterface {
    name = 'TitleAddedToAds1677158276111'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_402082c46c099c3563cabfa8d45"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "userAddressId" TO "refUserID"`);
        await queryRunner.query(`ALTER TABLE "addresses" RENAME CONSTRAINT "UQ_402082c46c099c3563cabfa8d45" TO "UQ_9c9803d95923a9cb44ba94acb6f"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "REL_bafb08f60d7857f4670c172a6e"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "title" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "roadName"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "roadName" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "complement"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "complement" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "zipCode" character varying(9) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "city" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phoneNumber" character varying(17) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthDate" character varying(17) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "description" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "accountType"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "accountType" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_9c9803d95923a9cb44ba94acb6f" FOREIGN KEY ("refUserID") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_9c9803d95923a9cb44ba94acb6f"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "accountType"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "accountType" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthDate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthDate" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phoneNumber" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "zipCode" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "complement"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "complement" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "roadName"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "roadName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "addresses" RENAME CONSTRAINT "UQ_9c9803d95923a9cb44ba94acb6f" TO "UQ_402082c46c099c3563cabfa8d45"`);
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "refUserID" TO "userAddressId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_402082c46c099c3563cabfa8d45" FOREIGN KEY ("userAddressId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
