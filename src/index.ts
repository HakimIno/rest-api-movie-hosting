import * as dotenv from "dotenv";
import express from "express";
import cors from "cors"

//router
import { filmRouter } from "./film/film.router";

dotenv.config();

if (!process.env) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/films", filmRouter);

app.listen(PORT, () => {
    console.log(`Listing on port ${PORT}`);
});
