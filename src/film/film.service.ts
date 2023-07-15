import { db } from "../utils/db.server";

type Film = {
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    coverPath: string;
    genre: string;
    duration: string;
    mediaType: string;
}

export const listFilm = async (): Promise<Film[]> => {
    return db.film.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            videoUrl: true,
            thumbnailUrl: true,
            coverPath: true,
            genre: true,
            duration: true,
            mediaType: true
        }
    })
}