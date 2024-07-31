import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
const app =express();
dotenv.config({ path: "./config/config.env"});

app.use(cors
    ({
    origin:[process.env.FRONTEND_URL],
    methods:["PORT"],
    credentials:true
})
);

app.use(express.json());//to convert the data from json string format to json object
app.use(express.urlencoded({extended:true}));//data of which type

dbConnection();
export default app;