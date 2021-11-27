import {BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import bcrypt from 'bcryptjs';

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column('varchar')
    public name: string;

    @Column('varchar')
    public email: string;

    @Column('varchar')
    public password: string;

    @CreateDateColumn()
    public created_at: Date;
    
    @UpdateDateColumn()
    public updated_at: Date;

    @BeforeInsert()
    public createAt() {
        this.created_at = new Date();
    }

    @BeforeUpdate()
    public updatedAt() {
        this.updated_at = new Date();
    }

    @BeforeInsert()
    public async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}
