
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
const app =express();
dotenv.config({ path: "./config/config.env"});

app.use(cors