import { NextFunction, Request, Response } from 'express';


const DemoMiddleware = (request: Request, response: Response, next: NextFunction) => {

    if (request.params.id === '999') {
        return response.json({mensagem: "DEU ALGO ERRADO! PQ 999 é proibido!"});
    }

    console.debug("MENSAGEM", "CHAMANDO A ROTA DE VIEW!");
    next();
}

export default DemoMiddleware;