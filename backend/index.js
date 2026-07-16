import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/configs/connectDB.js";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();

// middleware_start
dotenv.config();
app.use(express.json());
app.use(cors());
// middleware_end

// connect-DB_start
(async () => {
    try {
        await connectDB.authenticate();
        await connectDB.sync({ force : false });
        console.log("Database Connection Success");
    } catch (error) {
        console.log(`Database Connection Failed : ${error}`);
    }
})()
// connect-DB_end

// ROUTES_START
app.use("/users", userRoutes);
// ROUTES_END
app.listen(process.env.PORT, () => {
    console.log("Server Running On : ", process.env.PORT)
})