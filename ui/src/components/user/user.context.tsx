import React, { useMemo, useState } from 'react';


export type UserContextState = {
  loggedIn: true;
  username: string;
  password: string;
} | { loggedIn: false }

const initial: UserContextState = {
  loggedIn: false
};

export const UserContext = React.createContext<[UserContextState, (state: UserContextState) => void]>([initial, () => {}]);

type Props = {
  children?: React.ReactNode;
};

const UserContainer = ({ children }: Props) => {

  const [context, setContext] = useState<UserContextState>(initial)

  return <UserContext.Provider value={[context, setContext]}>{children}</UserContext.Provider>;
};

export default UserContainer;
