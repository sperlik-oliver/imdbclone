import { NextFunction, Request, Response, Router } from "express";
import safeQuery from "../safe-query/safe-query";
import * as repo from '../../repository/movie/movie.repository'
import * as validate from './movie.validate'
import { HTTP_STATUS_CODES } from "../../types";
import ensureAuthenticatedMiddleware from "../../middleware/ensure-authenticated.middleware";

const all = async (req: Request, res: Response) => {
    await safeQuery(async () => {
        const result = await repo.all()
        return res.status(HTTP_STATUS_CODES.OK).json({ data: result, error: null })
    }, res, 'movie/all')
}

const comment = async (req: Request, res: Response) => {
    const comment = req.body
    await safeQuery(async () => {
        const error = validate.comment(comment)
        if (error) return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ data: null, error })
        await repo.comment(comment)
        return res.status(HTTP_STATUS_CODES.OK).json({ data: null, error: null })
    }, res, 'movie/comment')
}

const rating = async (req: Request, res: Response) => {
    const rating = req.body
    await safeQuery(async () => {
        const error = validate.rating(rating)
        if (error) return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ data: null, error })
        await repo.rating(rating)
        return res.status(HTTP_STATUS_CODES.OK).json({ data: null, error: null })
    }, res, 'movie/rating')
}

export const movieRouter = Router()

movieRouter.get('/', all)
movieRouter.post('/comment', (req: Request, res: Response, next: NextFunction) => ensureAuthenticatedMiddleware(req, res, next), comment)
movieRouter.post('/rating', (req: Request, res: Response, next: NextFunction) => ensureAuthenticatedMiddleware(req, res, next), rating)