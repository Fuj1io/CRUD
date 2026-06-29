import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";

configDotenv();


const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        dialect : "mysql",
        host : process.env.DB_HOSTNAME,
        port : process.env.DB_PORT,
        logging : false,
        freezeTableName : true
    }
);
export default db;