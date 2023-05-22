import { instance } from "../../axios.config"
import useEnsureAuth from "./use-ensure-auth"

const useChangePassword = () => {
    const ensureAuth = useEnsureAuth()
    return async (email: string, currentPassword: string, newPassword: string, confirmNewPassword: string) => {
        const { data } = await instance({
            url: '/user/password',
            method: 'PUT',
            data: {
                email,
                currentPassword,
                newPassword,
                confirmNewPassword
            },
            headers: { 'ensure-auth': ensureAuth }
        })
        return data
    }
}

export default useChangePassword