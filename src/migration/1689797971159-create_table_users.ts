import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableUsers1689797971159 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`            
            CREATE TABLE users (
                id integer not null,
                name character varying,
                role character varying,
                email character varying
                primary key (id)
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('DROP TABLE users')
    }

}
