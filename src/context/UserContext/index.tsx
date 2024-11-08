"use client";

import { createContext, useState, ReactNode, useEffect } from 'react';
import { ProvidedUserData } from './types';

type UserContextType = {
  user: ProvidedUserData;
  setUser: React.Dispatch<React.SetStateAction<ProvidedUserData>>;
};

export const UserContext = createContext<UserContextType>({} as UserContextType);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<ProvidedUserData>({} as ProvidedUserData); 

  useEffect(() => {
      const sessionUser = JSON.parse(localStorage.getItem('user') || "{}");

      if (sessionUser && Object.keys(sessionUser).length > 0 && !user.uid) {
        setUser(sessionUser);
      }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
