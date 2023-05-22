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
}