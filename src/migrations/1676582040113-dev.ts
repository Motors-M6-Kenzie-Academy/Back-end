import { MigrationInterface, QueryRunner } from "typeorm";

export class dev1676582040113 implements MigrationInterface {
    name = 'dev1676582040113'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "city" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "city"`);
    }

}
