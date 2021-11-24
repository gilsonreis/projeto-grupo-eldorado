import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMovieTable1637433963904 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'movies',
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: "title",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "synopsis",
                    type: "text",
                    isNullable: false
                },
                {
                    name: "cover",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "release_date",
                    type: "date",
                },
                {
                    name: "billing",
                    type: ""
                },
                {
                    name: "posted_by",
                    type: "int",
                    length: '11',
                    isNullable: false
                },
                {
                    name: "is_actived",
                    type: "boolean",
                    default: false
                },
                {
                    name: "category_id",
                    type: 'int',
                    length: '11'
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    isNullable: false
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    isNullable: true
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('movies');
    }

}
