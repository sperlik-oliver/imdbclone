import React, { useEffect, useState } from 'react'
import { Movie as MovieType } from '../../types'
import styled from '@emotion/styled'
import { Column, Row } from '../../styled/flex'
import useMovieImage from './use-movie-image'
import useNotify from '../notification/use-notify'
import placeholder from "./placeholder.jpg"
import MovieDetail from './movie-detail'
import { getAvg } from '../../util/math.util'
import Rating from './rating'
import Comments from './comments'

type Props = {
    initialMovie: MovieType
}

const Movie = ({ initialMovie }: Props) => {

    const { id, name, description, director, ratings, actors, genre, comments } = initialMovie

    const [image, setImage] = useState(placeholder)

    const getImage = useMovieImage()

    useEffect(() => {
        getImage(id).then(image => image ? setImage(image) : {})
    })


    return <Container>
        <h1>{name}</h1> 
        <Details>
            <Image src={image.toString()}/>
            <DetailsColumn>
                <MovieDetail title='' detail={description} />
                <MovieDetail title='Director' detail={director} />
                <MovieDetail title='Genre' detail={genre} />
                <MovieDetail title='Actors' detail={actors.join(", ")} />
                <MovieDetail title='Average rating (out of 5)' detail={ratings.length > 0 ? getAvg(ratings).toString() : "No ratings yet"} />
                <Rating movieId={id} />
                
            </DetailsColumn>
        </Details>
        <Comments movieId={id} comments={comments} />
    </Container>
}

const Details = styled(Row)`
gap: 20px;
`

const DetailsColumn = styled(Column)`
gap: 20px;
`

const Image = styled.img`
width: 70vh;
height: fit-content;
`

const Container = styled(Column)`
    padding: 40px;
    height: 70vh;
    overflow-y: scroll;
    width: 100%;
`

export default Movie