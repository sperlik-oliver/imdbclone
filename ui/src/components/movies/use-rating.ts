import { instance } from "../../axios.config"
import useEnsureAuth from "../user/use-ensure-auth"

const useRating = () => {
    const ensureAuth = useEnsureAuth()
    return async (points: number, username: string, movieId: number) => {
        const { data } = await instance({
            method: 'POST',
            url: '/movie/rating',
            headers: { 'ensure-auth': ensureAuth },
            data: {
                points,
                username,
                movieId
            }
        })
        return data
    }
}


export default useRating