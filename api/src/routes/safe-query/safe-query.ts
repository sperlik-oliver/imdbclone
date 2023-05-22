import { HTTP_STATUS_CODES } from "../../types"
import { Response } from "express"
import log from '../../logging/log'

export default async (callback: () => Promise<unknown>, res: Response, origin = 'N/A') => {
    try {
        await callback()
        log(`succesful operation in origin ${origin}`, 'info')
    } catch (e) {
        const error = e.message ? e.message : 'unknown error' 
        log(`${error} from origin ${origin}`)
        return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ data: null, error: 'Internal server error' })
    } 
}