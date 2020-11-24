import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDailyEvent1606165338133 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE tb_daily_event
            (
                id integer NOT NULL,
                CONSTRAINT pk_tb_daily_event PRIMARY KEY (id),
                CONSTRAINT fk_tb_daily_event_tb_event FOREIGN KEY (id)
                    REFERENCES tb_event (id) MATCH SIMPLE
                    ON UPDATE NO ACTION
                    ON DELETE CASCADE
            );        
    `   );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE tb_daily_event;`);
    }

}
