import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import {errorMiddleware} from "./error/error.js"
import reservationRouter from "./routes/reservationRoute.js";
import session from 'express-session';
import sessionConfig from './config/sessionConfig.js';
import authRoutes from './routes/auth.js';
const app =express();
dotenv.config({ path: "./config/config.env"});

app.use(cors({
    origin: '*',
}));

app.use(express.json());//to convert the data from json string format to json object
app.use(express.urlencoded({extended:true}));//data of which type
app.use("/api/v1/reservation",reservationRouter);
app.use(session(sessionConfig));

dbConnection();

app.use(errorMiddleware)
app.use('/auth', authRoutes);

export default app;