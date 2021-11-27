import { Request, Response } from 'express';
import News from '../Entities/News';
import NewsRepository from '../Repository/NewsRepository';
import { getCustomRepository } from 'typeorm';



class NewsController {
    async index(request: Request, response: Response) {

        const newsRepository = getCustomRepository(NewsRepository);
        const news = await newsRepository.BuscarTodos();
        response.json({
            status: 'success',
            data: news

        })
    }

    async view(request: Request, response: Response) {
        const newsRepository = getCustomRepository(NewsRepository);
        const { id } = request.params;
        const news = await newsRepository.PegarPorId(id);

        response.json({
            status: 'success',
            data: news

        })
    }

    async create(request: Request, response: Response) {
        try {
            const newsRepository = getCustomRepository(NewsRepository);

            const {
                title,
                news_body,
                cover,
                posted_by,
                is_actived,
                category
            } = request.body

            const NewsAlreadyExists = await newsRepository.PegarPorTitulo(title);
            
            if (typeof NewsAlreadyExists !== 'undefined') {
                return response.status(409).json({
                    status: "fail",
                    data: {
                        title: "Uma notícia com o mesmo título já existe no banco de dados;"
                    }
                })
            }

            
            
            let news = new News();
            news.title = title
            news.news_body = news_body;
            news.cover = cover;
            news.is_actived = is_actived;
            news.posted_by = posted_by;
            news.category = category
            news = await newsRepository.save(news);

            return response.status(201).json({
                status: "success",
                data: {
                    title: "Notícia cadastrada com sucesso!",
                    news: news
                }
            });
        } catch(error) {
            return response.status(400).json({
                status: "error",
                data: {
                    error: error.message
                }
            })
        }
    }

    async update(request: Request, response: Response) {
        const newsRepository = getCustomRepository(NewsRepository);
        const { id } = request.params;
        let news = await newsRepository.PegarPorId(id);

        const {
            title,
            news_body,
            cover,
            posted_by,
            is_actived,
            category
        } = request.body

        news.title = title
        news.news_body = news_body;
        news.cover = cover;
        news.is_actived = is_actived;
        news.posted_by = posted_by;
        news.category = category
        news = await newsRepository.save(news);

        return response.json(news);

    }

    async delete(request: Request, response: Response) {
        const newsRepository = getCustomRepository(NewsRepository);
        const { id } = request.params;
        let news = await newsRepository.PegarPorId(id);

        await newsRepository.delete(news);
        return response.json({"msg": "Notícia excluida com suceso!"});
    }

    getAllCategories(request: Request, response: Response) {
        return response.json({
            status: "success",
            data: [
                {
                    id: 1,
                    name: "Esportes"
                },
                {
                    id: 2,
                    name: "Moda"
                },
                {
                    id: 3,
                    name: "Gastronomia"
                },
                {
                    id: 4,
                    name: "Política"
                },
                {
                    id: 5,
                    name: "Entretenimento"
                },
            ]
        })
    }
}

export default new NewsController();