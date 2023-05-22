import { Request, Response, Router } from "express";
import safeQuery from "../safe-query/safe-query";
import * as repo from '../../repository/user/user.repository'
import * as validate from './user.validate'
import { HTTP_STATUS_CODES, ERRORS } from "../../../../shared/types";

const PATH = 'user'

const login = async (req: Request, res: Response) => {
   const { email, password } = req.body
   const error = validate.login(email)
   if (error) return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ data: null, error })
   await safeQuery(async () => {
        const user = await repo.login(email, password)
        if (user) return res.status(HTTP_STATUS_CODES.OK).json({ data: { username: user.username, email: user.email }, error: null })
        return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).json({ data: null, error: validate.USER_VALIDATION_ERRORS.INVALID_CREDENTIALS })
   }, res, `${PATH}/login`)
}

const register = async (req: Request, res: Response) => {
    const { username, email, password, confirmPassword } = req.body
    await safeQuery(async () => {
        const error = validate.register(username, email, password, confirmPassword)
        if (error) return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ data: null, error })
        const { error: dbError } = await repo.register(email, username, password)
        if (dbError) return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ data: null, error: dbError })
        return res.status(HTTP_STATUS_CODES.OK).json({ data: null, error: null })
    }, res, `${PATH}/register`)
}

const all = async (req: Request, res: Response) => {
    await safeQuery(async () => {
        const result = await repo.all()
        return res.status(HTTP_STATUS_CODES.OK).json({ data: result.map(({ username }) => username), error: null })
    }, res, `${PATH}/all`)
    }
    
const addFriend = async (req: Request, res: Response) => {
    const { adder, added } = req.body
    await safeQuery(async () => {
        await repo.addFriend(adder, added)
        return res.status(HTTP_STATUS_CODES.OK).json({ data: null, error: null })
    }, res, `${PATH}/friend/add`)
}

const removeFriend = async (req: Request, res: Response) => {
    const { remover, removed } = req.body
    await safeQuery(async () => {
        
        await repo.removeFriend(remover, removed)
        return res.status(HTTP_STATUS_CODES.OK).json({ data: null, error: null })
    }, res, `${PATH}/friend/remove`)
}

const deleteAccount = async (req: Request, res: Response) => {
    const email = req.query.email
    await safeQuery(async () => {
        await repo.deleteAccount(email as string)
        return res.status(HTTP_STATUS_CODES.OK).json({ data: null, error: null })
    }, res, `${PATH}/delete-account`)
}

export const userRouter = Router()

userRouter.get('/', all)
userRouter.post('/login', login)
userRouter.post('/register', register)
userRouter.put('/friend/add', addFriend)
userRouter.put('/friend/remove', removeFriend)
userRouter.delete('/', deleteAccount)