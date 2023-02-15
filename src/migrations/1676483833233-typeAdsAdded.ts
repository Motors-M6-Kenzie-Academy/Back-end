import { MigrationInterface, QueryRunner } from "typeorm";

export class typeAdsAdded1676483833233 implements MigrationInterface {
    name = 'typeAdsAdded1676483833233'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" ADD "typeAds" character varying NOT NULL DEFAULT 'sell'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "typeAds"`);
    }

}
