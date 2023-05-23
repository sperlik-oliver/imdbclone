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
}))

export const comment = async (comment: Comment) => {
    const { id, movieId, ...rest } = comment
    await client.movie.update({ 
        where: {
            id: movieId
        },
        data: {
            comments: { create: rest }
        }
     })
}

export const rating = async (rating: Rating) => {
    await client.movie.update({
        where: {
            id: rating.movieId
        },
        data: rating
    })
}