import express from 'express';
import 'express-async-errors';
import 'dotenv/config';
import cors from 'cors';
import router from '@Config/router';
import { createConnection } from 'typeorm';

const app = express();

const port = process.env.PORT || 4000;

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());

createConnection().then(() => console.log("BANCO DE DADOS CONECTADO COM SUCESSO!"))

app.use(router)

app.listen(port, () => console.log(`RODANDO NA PORTA ${port}`));