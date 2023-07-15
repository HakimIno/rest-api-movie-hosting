import express from "express";
import type { Request, Response } from "express";

import { body, validationResult } from "express-validator";

import * as FilmService from './film.service'

export const filmRouter = express.Router();

//GET: LIST OF ALL MOVIE

filmRouter.get("/", async (req: Request, res: Response) => {
    try {

        const films = await FilmService.listFilm();
        return res.status(200).json(films);

    } catch (error: any) {
        return res.status(500).json(error.message);
    }
})