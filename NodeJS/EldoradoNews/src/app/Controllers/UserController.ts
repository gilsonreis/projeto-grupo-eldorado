import { Request, Response } from 'express';
import { User } from '../Entities/User';
import UserRepository from '../Repository/UserRepository';
import { getCustomRepository } from 'typeorm';
import { createTransport } from 'nodemailer';
import mailConfig from '../../config/mail'


class UserController {
    async create(request: Request, response: Response) {
        const userRepository = getCustomRepository(UserRepository);

        const {
            email,
            name,
            password
        } = request.body;

        let user = new User();
        user.name = name;
        user.email = email;
        user.password = password
        user = await userRepository.save(user);

        if (typeof user !== 'undefined') {

            //FAZER O ENVIO DO EMAIL
            const transporter = createTransport({
                host: mailConfig.mailHost,
                port: mailConfig.mailPort,
                auth: {
                    user: mailConfig.mailUser,
                    pass: mailConfig.mailPass
                }
            });

            const mailBodyText = `Olá ${user.name},\n\nBem vindo vindo a nossa plataforma.`;
            const mailBodyHtml = `Olá <strong>${user.name}</strong>,<br><p>Bem vindo vindo a nossa plataforma.</p>`;
            let info = await transporter.sendMail({
                to: "teste@email.com",
                from: mailConfig.mailFrom,
                replyTo: mailConfig.mailReplyTo,
                subject: "Novo Usuário Cadastrado",
                text: mailBodyText,
                html: mailBodyHtml
            });

            delete user.password;

            return response.status(201).json({
                status: 'success',
                data: {
                    user,
                    info
                }
            })
        }

        

    }
}

export default new UserController();