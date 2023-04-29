import express, { Router } from 'express';
import dotenv from 'dotenv'
import tokenMiddleware from './middleware/token.middleware';

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use(tokenMiddleware)

app.listen(process.env.PORT, () => {
    console.log(`Application is ready on port ${process.env.PORT}`)
})


export default app