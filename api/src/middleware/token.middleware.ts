import { NextFunction, Request, Response } from "express";
import { HTTP_STATUS_CODES } from '../../../shared/types'

const AUTH_API_KEY = process.env.AUTH_API_KEY

export default (req: Request, res: Response, next: NextFunction) => {
    if (!AUTH_API_KEY) return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
    const token = req.header('Authentication')
    if (!token || token !== AUTH_API_KEY) return res.status(HTTP_STATUS_CODES.UNAUTHORIZED)
    next()
}
