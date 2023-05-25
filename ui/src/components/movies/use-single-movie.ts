import useMovies from "./use-movies"

const useSingleMovie = (id: number) => {
    const { movies } = useMovies()
    return movies.find(({ id: movieId }) => id === movieId)
}

export default useSingleMovie