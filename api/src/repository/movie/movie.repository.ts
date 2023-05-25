import { Comment, Rating } from "@prisma/client"
import client from "../client/client"

export const all = async () => (await client.movie.findMany({ include: {
    actors: true,
    comments: { include: { user: true } },
    ratings: true
}})).map(movie => ({
    ...movie,
    comments: movie.comments.map(({ user, text, date }) => ({ text, date, username: user.username })),
    ratings: movie.ratings.map(({ points }) => points),
    actors: movie.actors.map(({ name }) => name)
})) ?? []

export const comment = async (text: string, username: string, date: string, movieId: number) => {

    await client.movie.update({ 
        where: {
            id: movieId
        },
        data: {
            comments: { create: { text, date, user: { connect: { username } } } }
        }
     })
}

export const rating = async (points: number, username: string, movieId: number): Promise<null | string> => {
    const user = await client.user.findFirst({ 
        where: {
            username
        }
    })
    const existingRating = await client.rating.findFirst({
        where: {
            movieId,
            user: {
                id: user.id
            }
        }
    })
    if (existingRating) return "You can only rate each movie once."
    await client.rating.create({
        data: {
            points,
            movie: { connect: { id: movieId } },
            user: { connect: { username } }
        }
    })

}