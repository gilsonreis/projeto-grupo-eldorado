import News from "../Entities/News";
import { EntityRepository, Repository } from "typeorm";
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";

@EntityRepository(News)
class NewsRepository extends Repository<News> {
    public BuscarTodos(): Promise<PaginationAwareObject> {
        const query = this.createQueryBuilder('n');
        return query.paginate();        
    }

    public PegarPorId(id) {

        return this.findOne({id}, {relations: ['category']});

        // const query = this.createQueryBuilder('n');
        // query.where({id})
        // return query.getOne()
    }


    public PegarPorTitulo(title: string) {
        return this.findOne({title});
    }
}

export default NewsRepository;

let email = "email@email.com";
{
    email
}