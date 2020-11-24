import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableEvent1606106325180 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`        
            CREATE SEQUENCE sq_event
                INCREMENT 1
                START 1
                MINVALUE 0
                MAXVALUE 2147483648;

            CREATE TABLE tb_event
            (
                id integer NOT NULL DEFAULT nextval('sq_event'::regclass),
                name character varying(255) NOT NULL,
                start_date_time timestamp without time zone NOT NULL,
                duration_time time without time zone NOT NULL,
                CONSTRAINT pk_event PRIMARY KEY (id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE tb_event;
            DROP SEQUENCE sq_event;
        `);
    }

}
