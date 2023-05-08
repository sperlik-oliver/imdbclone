import express, { Router } from 'express';
import dotenv from 'dotenv'
import tokenMiddleware from './middleware/token.middleware';
import { userRouter } from './routes/user/user.route';

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use(tokenMiddleware)

app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log(`Application is ready on port ${PORT}`)
})



export default app