require('dotenv').config();
const { resolve } = require('path');

module.exports = {
    "type": process.env.DB_TYPE, //"mysql",
    "host": process.env.DB_HOST, //"server.simplifysoftwares.com.br",
    "port": process.env.DB_PORT, //3306,
    "username": process.env.DB_USER, //"simplify_eldorado",
    "password": process.env.DB_PASS, //"kMmE7UHY1NyS",
    "database": process.env.DB_DATABASE, //"simplify_eldorado_news",
    "logging": false,
    "entities": [
      __dirname + "/dist/app/Entities/*.js",
      __dirname + "/**/app/Entities/*.ts"
    ],
    "migrations": [
      __dirname + "/dist/app/Databas/Migrations/*.js",
      __dirname + "/**/Database/Migrations/*.{js,ts}"
    ],
    "cli": {
        "migrationsDir": "src/Database/Migrations",
        "entitiesDir": "src/Entities"
    }
 }