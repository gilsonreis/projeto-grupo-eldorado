import {MigrationInterface, QueryRunner} from "typeorm";
import bcrypt from 'bcryptjs'

export class addNewUserToUserTable1637281294914 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        const passwordHash = await bcrypt.hash('qwe123', 10);
        const sql = `insert into user (id, name, email, password) values (null, 'Super Administrador', 'admin@admin.com', '${passwordHash}')`;
        await queryRunner.query(sql);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`delete from user where email = 'admin@admin.com'`)
    }

}
