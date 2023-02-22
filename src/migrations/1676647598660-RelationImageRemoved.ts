import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationImageRemoved1676647598660 implements MigrationInterface {
    name = 'RelationImageRemoved1676647598660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_c35bd657508e8ace18024301308"`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "adsId"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "cover" character varying(124) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "gallery_image" character varying(124) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "gallery_image"`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "cover"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "adsId" uuid`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "image" character varying(124) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_c35bd657508e8ace18024301308" FOREIGN KEY ("adsId") REFERENCES "ads"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
