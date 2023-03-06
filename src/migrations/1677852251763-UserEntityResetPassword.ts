import { MigrationInterface, QueryRunner } from "typeorm";

export class UserEntityResetPassword1677852251763 implements MigrationInterface {
    name = 'UserEntityResetPassword1677852251763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "resetCode" character varying(8) NOT NULL DEFAULT 'xxxxxxxx'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "resetCode"`);
    }

}
