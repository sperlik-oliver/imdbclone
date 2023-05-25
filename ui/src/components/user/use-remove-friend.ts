import { instance } from "../../axios.config"
import useEnsureAuth from "./use-ensure-auth"

const useRemoveFriend = () => {
    const ensureAuth = useEnsureAuth()
    return async (remover: string, removed: string) => {
        const { data } = await instance({
            method: 'PUT',
            url: '/user/friend/remove',
            data: {
                remover,
                removed
            },
            headers: { 'ensure-auth': ensureAuth }
        })
        return data
    }
}

export default useRemoveFriend