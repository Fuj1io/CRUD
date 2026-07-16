import { Sequelize } from "sequelize";
import clear from "../helper/helperDB.js";
import dotenv from "dotenv";

// middleware_start
dotenv.config();
// middleware_end

const connectDB = new Sequelize(
    clear(process.env.DB_NAME),
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host    : process.env.DB_HOSTNAME,
        dialect : "mysql",
        port    : process.env.DB_PORT,
        logging : false
    }
);

export default connectDB;