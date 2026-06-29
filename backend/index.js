import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

import db from "./src/configs/connectDB.js";

configDotenv();

const app = express();

// MIDLLEWARE_START
app.use(express());
app.use(cors());
// MIDLLEWARE_END
(async() => {
    try {
        await db.authenticate();
        console.log("db COnnected !!");
    } catch (error) {
        console.log('Failed to Connect', error)
    }
})();
// ROUTER_START
app.get("/", (req, res) => {
    res.send("Hello World");
});
// ROUTER_END

app.listen(process.env.PORT, () => {
    console.log(`Server Running On : http://localhost:3001`);
});