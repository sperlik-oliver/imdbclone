import { instance } from "../../axios.config"
import useEnsureAuth from "../user/use-ensure-auth"

const useComment = () => {
    const ensureAuth = useEnsureAuth()
    return async (text: string, username: string, date: string, movieId: number) => {
        const { data } = await instance({
            method: 'POST',
            url: '/movie/comment',
            headers: { 'ensure-auth': ensureAuth },
            data: {
                text,
                username,
                date,
                movieId
            }
        })
        return data
    }
}


export default useComment