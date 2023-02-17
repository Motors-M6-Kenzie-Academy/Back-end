import { MigrationInterface, QueryRunner } from "typeorm";

export class CoverAddedToAds1676492938528 implements MigrationInterface {
    name = 'CoverAddedToAds1676492938528'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" RENAME COLUMN "image" TO "cover"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" RENAME COLUMN "cover" TO "image"`);
    }

}
