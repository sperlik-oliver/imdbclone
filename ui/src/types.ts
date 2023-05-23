export type Friend = {
    username: string
    toplist: Movie[]
}

export type Movie = {
    id: number
    name: string
    description: string
    director: string
    image: string
    genre: string
    actors: string[],
    ratings: number[],
    comments: { username: string, date: string, text: string }[]
}