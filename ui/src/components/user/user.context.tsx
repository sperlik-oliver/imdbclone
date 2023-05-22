import React, { useEffect, useState } from 'react';
import { Friend, Movie } from '../../types';

export type UserContextState = {
  loggedIn: true;
  username: string;
  email: string;
  token: string;
  friends: Friend[];
  toplist: Movie[]
} | { loggedIn: false }

const defaultState: UserContextState = {
  loggedIn: false
};

export const UserContext = React.createContext<[UserContextState, (state: UserContextState) => void]>([defaultState, () => {}]);

type Props = {
  children?: React.ReactNode;
};

const UserContainer = ({ children }: Props) => {

  const [context, setContext] = useState<UserContextState>(defaultState)
  
  useEffect(() => {
    const persistedUser = localStorage.getItem("user")
    if (!persistedUser) return
    try {
      const parsed = JSON.parse(persistedUser ?? '')
      if (parsed.loggedIn && parsed.username && parsed.email && parsed.token && parsed.friends && parsed.toplist) setContext({...parsed})
    } catch {}
  }, [])
  
  const onSetContext = (state: UserContextState) => {
    if (state.loggedIn === false) {
      localStorage.removeItem("user")
    } else {
      localStorage.setItem("user", JSON.stringify(state))
    }
    setContext(state)
  }

  return <UserContext.Provider value={[context, onSetContext]}>{children}</UserContext.Provider>;
};

export default UserContainer;
