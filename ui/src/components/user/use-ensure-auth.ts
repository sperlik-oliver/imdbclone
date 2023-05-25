import { useContext } from "react"
import { UserContext } from "./user.context"

const useEnsureAuth = ()  =>  {
    const [user, _] = useContext(UserContext)

    if (user.loggedIn) return `${user.token} ${user.email}`
    return ''
}

export default useEnsureAuth