import { NextFunction, Request, Response } from 'express';
import * as Yup from "yup"
import { pt } from "yup-locale-pt"

Yup.setLocale(pt);

export default async (request: Request, response: Response, next: NextFunction) => {
    try {
        
        const schema = Yup.object().shape({
            title: Yup.string().required("ESSE CAMPO TEM QUE SER PREENCHIDO").trim(),
            news_body: Yup.string().required().trim(),

        });

        await schema.validate(request.body, { abortEarly: false })
        return next();
    } catch (error) {
        return response.status(400).json({
            status: "fail",
            message: error.inner
        })
    }
}