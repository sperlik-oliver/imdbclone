import { instance } from "../../axios.config"
import useEnsureAuth from "../user/use-ensure-auth"

const useRegister = (email: string, username: string, password: string, confirmPassword: string) => {
    return async () => { 
        const { data } = await instance({
            method: 'post',
            url: '/user/register',
            data: {
                email,
                username,
                password,
                confirmPassword
            }
        })
        return data
    }
}

export default useRegister