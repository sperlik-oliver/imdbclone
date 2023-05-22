import { instance } from "../../axios.config"

const useLogin = (email: string, password: string) => {
    return async () => {
        const { data } = await instance({
            method: 'POST',
            url: 'user/login',
            data: {
                email,
                password
            }
        })
        return data
    }
}

export default useLogin