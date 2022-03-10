require('dotenv').config();
const { resolve } = require('path');

module.exports = {
    "type": process.env.DB_TYPE, 
    "host": process.env.DB_HOST, 
    "port": process.env.DB_PORT, 
    "username": process.env.DB_USER, 
    "password": process.env.DB_PASS, 
    "database": process.env.DB_DATABASE, 
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
