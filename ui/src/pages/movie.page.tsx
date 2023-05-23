import React from 'react'
import Page from './page'
import Movie from '../components/movies/movie'
import { useParams } from 'react-router-dom'
import useSingleMovie from '../components/movies/use-single-movie'

const MoviePage = () => {
    const { id } = useParams()
    const initialMovie = useSingleMovie(parseInt(id ?? ''))
    if (!initialMovie) return <span>An error occurred</span>
    return <Page><Movie initialMovie={initialMovie}/></Page>
}

export default MoviePage