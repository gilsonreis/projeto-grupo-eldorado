import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const Auth = (request: Request, response: Response, next: NextFunction) => {
    try {
        const { authorization } = request.headers;

        if (typeof authorization === 'undefined') {
            return response.status(401).json({
                status: "fail",
                data: {
                    title: "Você não está autorizado a acessar essa página."
                }
            })
        }

        const [, token] = authorization.split(" ");
        // const token = authorization.split(" ")[1];
        // const token = authorization.replace("Bearer", "").trim();
        
        const auth = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

        return next();

    } catch {
        return response.status(401).json({
            status: "fail",
            data: {
                title: "Você não está autorizado a acessar essa página."
            }
        });
    }   
}

export default Auth;