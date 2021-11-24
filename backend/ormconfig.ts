import 'dotenv/config';

module.exports = {
    "type": process.env.DB_TYPE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DATABASE,
    "logging": true,
    "entities": [
       __dirname + "/src/app/Entities/*.ts"
    ],
    "migrations": [
       __dirname + "/src/Database/Migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": __dirname + "/src/Database/Migrations",
        "entitiesDir": __dirname + "/src/app/Entities"
    }
 }