import { MigrationInterface, QueryRunner } from "typeorm";

export class dev1676776017924 implements MigrationInterface {
    name = 'dev1676776017924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_cd34d7bc0427847a65091564bed"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "REL_bafb08f60d7857f4670c172a6e"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "refAddressID"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "refAddressID" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("refAddressID")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_cd34d7bc0427847a65091564bed" FOREIGN KEY ("refAddressID") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
