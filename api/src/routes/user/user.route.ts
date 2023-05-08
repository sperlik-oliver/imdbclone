import { Request, Response, Router } from "express";
import safeQuery from "../safe-query/safe-query";
import * as repo from '../../repository/user/user.repository'

const login = async (req: Request, res: Response) => {
   const { email, password } = req.body
   await safeQuery(() => repo.login(email, password), res, 'user/login')
}

const register = async (req: Request, res: Response) => {
    const user = req.body
    await safeQuery(() => repo.register(user), res, 'user/register')
}

export const userRouter = Router()

userRouter.post('/login', login)
userRouter.post('/register', register)