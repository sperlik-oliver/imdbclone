import { instance } from "../../axios.config"
import useEnsureAuth from "./use-ensure-auth"

const useDeleteAccount = () => {
    const ensureAuth = useEnsureAuth()
    return async (email: string) => {
        const { data } = await instance({
            method: 'delete',
            url: '/user',
            data: {
                email
            },
            headers: { 'ensure-auth': ensureAuth }
        })
        return data
    }
}

export default useDeleteAccount