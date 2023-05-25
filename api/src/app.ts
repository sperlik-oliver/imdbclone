import express, { NextFunction, Router } from 'express';
import dotenv from 'dotenv'
import tokenMiddleware from './middleware/token.middleware';
import { userRouter } from './routes/user/user.route';
import { HTTP_STATUS_CODES } from './types';
import cors from 'cors'
import { movieRouter } from './routes/movie/movie.route';

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(cors())

app.use(express.json())

app.use('/health', (_, res) => res.status(HTTP_STATUS_CODES.OK).json("Service is healthy!"))

app.use('/', (req, res, next) => tokenMiddleware(req, res, next))

app.use('/user', userRouter)
app.use('/movie', movieRouter)
    
app.use('/', (_, res) => res.status(HTTP_STATUS_CODES.NOT_FOUND).json({ data: null, errors: "Route not found" }))

app.listen(PORT, () => {
    console.log(`Application is ready on port ${PORT}`)
})



export default app