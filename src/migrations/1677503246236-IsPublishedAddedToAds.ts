import { MigrationInterface, QueryRunner } from "typeorm";

export class IsPublishedAddedToAds1677503246236 implements MigrationInterface {
    name = 'IsPublishedAddedToAds1677503246236'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" ADD "isPublished" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "isPublished"`);
    }

}
