import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Sequelize } from "sequelize";
import db from "./src/configs/connectDB.js";

// middleware-start
const app = express();
dotenv.config();
app.use(cors());
// middleware-end

// db_connnect_start


async function main() {
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

main();
// db_connnect_end

// routes_start

// routes_end

app.listen(process.env.PORT, () => {
    console.log(`Server Running On : ${process.env.PORT}`);
})