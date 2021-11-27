import slugify from "slugify";
import {Column, CreateDateColumn, Entity, UpdateDateColumn, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, ManyToOne, JoinColumn, AfterLoad} from "typeorm";
import { Category } from './Category';
import slugifyConfig from "../../config/slugify";
import pathConfig from "src/config/path";

@Entity()
export default class News {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column('varchar')
    public title: string;

    @Column('varchar')
    public slug: string;

    @Column('text')
    public news_body: string;

    @Column('varchar')
    public cover: string;


    @Column('varchar')
    public posted_by: string;

    @Column('boolean')
    public is_actived: boolean;

    @ManyToOne(() => Category)
    @JoinColumn({
        name: 'category_id',
        referencedColumnName: 'id'
    })
    public category: Category

    @CreateDateColumn()
    public created_at: Date;
    
    @UpdateDateColumn()
    public updated_at: Date;

    public full_path: string;

    @BeforeInsert()
    public createAt() {
        this.created_at = new Date();
    }

    @BeforeUpdate()
    public updatedAt() {
        this.updated_at = new Date();
    }

    @BeforeUpdate()
    @BeforeInsert()
    public addSlug() {
        this.slug = slugify(this.title, slugifyConfig)
    }

    @AfterLoad()
    public setFullPath() {
        this.full_path = `${pathConfig.fullStaticPath}/${this.cover}`;
    }

}