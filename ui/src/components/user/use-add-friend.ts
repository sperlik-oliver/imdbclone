import { instance } from "../../axios.config"
import useEnsureAuth from "./use-ensure-auth"

const useAddFriend = () => {
    const ensureAuth = useEnsureAuth()
    return async (adder: string, added: string) => {
        const { data } = await instance({
            method: 'PUT',
            url: '/user/friend/add',
            data: {
                adder,
                added
            },
            headers: { 'ensure-auth': ensureAuth }
        })
        return data
    }
}

export default useAddFriend