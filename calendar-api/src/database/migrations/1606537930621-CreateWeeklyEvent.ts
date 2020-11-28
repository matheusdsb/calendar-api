import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateWeeklyEvent1606537930621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE tb_weekly_event
            (
                id integer NOT NULL,
                CONSTRAINT pk_tb_weekly_event PRIMARY KEY (id),
                CONSTRAINT fk_tb_weekly_event_tb_event FOREIGN KEY (id)
                    REFERENCES tb_event (id) MATCH SIMPLE
                    ON UPDATE NO ACTION
                    ON DELETE CASCADE
            );
            
            CREATE SEQUENCE sq_day_weekly_event
                INCREMENT 1
                START 1
                MINVALUE 0
                MAXVALUE 2147483648; 
                
            CREATE TABLE tb_day_weekly_event
            (
                id integer NOT NULL DEFAULT nextval('sq_day_weekly_event'::regclass),
                id_weekly_event integer NOT NULL,
                day_of_week integer NOT NULL,
                CONSTRAINT pk_tb_day_weekly_event PRIMARY KEY (id),
                CONSTRAINT uq_tb_day_weekly_event_id_weekly_event_day_of_week UNIQUE (id_weekly_event, day_of_week),
                CONSTRAINT fk_tb_day_weekly_event_tb_weekly_event FOREIGN KEY (id)
                    REFERENCES tb_weekly_event (id) MATCH SIMPLE
                    ON UPDATE NO ACTION
                    ON DELETE CASCADE
                    NOT VALID
            );                
    `   );        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE tb_day_weekly_event;
            DROP SEQUENCE sq_day_weekly_event;
            DROP TABLE pk_tb_weekly_event;            
        `);
    }

}
