import { MigrationInterface, QueryRunner } from "typeorm";

export class ImagesUpdated1676570155498 implements MigrationInterface {
    name = 'ImagesUpdated1676570155498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "urlImage"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "urlImage" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "urlImage"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "urlImage" character varying(250) NOT NULL`);
    }

}
