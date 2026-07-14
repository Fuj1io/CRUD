import {Sequelize} from "sequelize";
import dotenv from "dotenv";
import { clean } from "../helper/DB.js"
dotenv.config();



const db = new Sequelize(
    clean(process.env.DB_NAME) ,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host :  process.env.DB_HOSTNAME || "localhost",
        dialect : "mysql",
        port :  parseInt(process.env.DB_PORT),
        logging: false
    }
);

export default db;