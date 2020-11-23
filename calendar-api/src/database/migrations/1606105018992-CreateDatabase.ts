import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDatabase1606105018992 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const hasDatabase = await queryRunner.hasDatabase(process.env.DATABASE_NAME);

        if (!hasDatabase) {
            await queryRunner.createDatabase(process.env.DATABASE_NAME, true);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
