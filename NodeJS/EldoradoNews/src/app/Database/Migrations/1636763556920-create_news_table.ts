import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createNewsTable1636763556920 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'news',
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
                    name: "news_body",
                    type: "text",
                    isNullable: false
                },
                {
                    name: "cover",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "posted_by",
                    type: "varchar",
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
        await queryRunner.dropTable('news');
    }

}
