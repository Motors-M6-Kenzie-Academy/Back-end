import { MigrationInterface, QueryRunner } from "typeorm";

export class dev1676489554885 implements MigrationInterface {
    name = 'dev1676489554885'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "userAddressId" uuid`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "UQ_402082c46c099c3563cabfa8d45" UNIQUE ("userAddressId")`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_402082c46c099c3563cabfa8d45" FOREIGN KEY ("userAddressId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_402082c46c099c3563cabfa8d45"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "UQ_402082c46c099c3563cabfa8d45"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "userAddressId"`);
    }

}
