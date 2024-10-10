"use client";

import { createContext, useState, ReactNode } from 'react';
import { ProvidedUserData } from './types';

type UserContextType = {
  user: ProvidedUserData;
  setUser: React.Dispatch<React.SetStateAction<ProvidedUserData>>;
};

export const UserContext = createContext<UserContextType>({} as UserContextType);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<ProvidedUserData>({} as ProvidedUserData); 

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
