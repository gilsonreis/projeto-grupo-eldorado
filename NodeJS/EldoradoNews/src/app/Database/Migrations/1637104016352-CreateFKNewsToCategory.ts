import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateFKNewsToCategory1637104016352 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'news',
            new TableForeignKey({
                columnNames: ['category_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'category',
                name: 'fk_news_category'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('news', 'fk_news_category')
    }

}
