import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addSlugFieldOnNewsTable1637195676076 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("alter table news add slug varchar(255) not null after title;")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('news', 'slug');
    }

}
