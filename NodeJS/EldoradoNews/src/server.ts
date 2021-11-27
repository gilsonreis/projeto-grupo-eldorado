import express from 'express';

import 'reflect-metadata';
import "express-async-errors";
import 'dotenv/config'
import cors from 'cors';

import { createConnection } from 'typeorm';
import { pagination } from "typeorm-pagination";
import { resolve } from 'path';

import router from './config/router';

const port = process.env.API_PORT || 4001;
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/static/news', 
    express.static(resolve(__dirname, '..', 'public', 'static', 'uploads'))
);

createConnection().then(() => console.log("Database was connected successful!"));
app.use(pagination);
app.use(router);

app.listen(port);