import { instance } from "../../axios.config"
import useEnsureAuth from "./use-ensure-auth"

const useChangeUsername = () => {
    const ensureAuth = useEnsureAuth()
    return async (email: string, username: string) => {
        const { data } = await instance({
            url: '/user/username',
            method: 'PUT',
            data: {
                email,
                username
            },
            headers: { 'ensure-auth': ensureAuth }
        })
        return data
    }
}

export default useChangeUsername