import { db } from "../src/utils/db.server";

type Film = {
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    coverPath: string;
    genre: string;
    mediaType: string;
    duration: string;

}

async function seed() {
    await Promise.all(
        getFilm().map((film) => {
            const { title, description, videoUrl, thumbnailUrl, coverPath, genre, mediaType, duration } = film;
            return db.film.create({
                data: {
                    title,
                    description,
                    videoUrl,
                    thumbnailUrl,
                    coverPath,
                    genre,
                    mediaType,
                    duration
                }
            })
        })
    )

}

seed()

function getFilm(): Array<Film> {
    return [
        {
            title: "The Everlasting Love (2023) ดั่งดวงใจรักนิรันดร์",
            description: "xxxxxxxxx",
            videoUrl: "https://main.77player.xyz/newplaylist/6aa09ca50df526e607c93966/6aa09ca50df526e607c93966.m3u8",
            thumbnailUrl: "https://www.123-hd.com/wp-content/uploads/2023/07/The-Everlasting-Love-2023-%E0%B8%94%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%94%E0%B8%A7%E0%B8%87%E0%B9%83%E0%B8%88%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%99%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%99%E0%B8%94%E0%B8%A3%E0%B9%8C-300x450.jpg",
            coverPath: "xxxxxxxxxxxxxx",
            genre: "ซีรี่ย์ซับไทย",
            mediaType: "tv",
            duration: "12 นาที"
        },
        {
            title: "Ponniyin Selvan Part 2 (2023)",
            description: "xxxxxxxxxxxxxxxxxx",
            videoUrl: "https://main.77player.xyz/newplaylist/fbe9f02200de1f4eb5a7898e/fbe9f02200de1f4eb5a7898e.m3u8",
            thumbnailUrl: "https://www.123-hd.com/wp-content/uploads/2023/07/The-Everlasting-Love-2023-%E0%B8%94%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%94%E0%B8%A7%E0%B8%87%E0%B9%83%E0%B8%88%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%99%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%99%E0%B8%94%E0%B8%A3%E0%B9%8C-300x450.jpg",
            coverPath: "xxxxxxxxxxxxxxxxx",
            genre: "ซีรี่ย์ซับไทย",
            mediaType: "movie",
            duration: "2 ชั่วโมง 45 นาที"
        }
    ]
}