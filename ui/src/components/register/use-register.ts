import { instance } from "../../axios.config"

const useRegister = (email: string, username: string, password: string, confirmPassword: string) => {
    const register = async () => { 
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
        console.log('here 2')
        return data
    }
    return register
}

export default useRegister