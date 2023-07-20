import React, { createContext, useEffect, useState } from 'react';

export interface User {
  name?: string;
  email?: string;
  image?: string;
  description?: string;
}

export const emptyUser: User = {
  name: '',
  email: '',
  image: '',
  description: '',
};

interface UserContextProps {
  user: User;
  updateUser: (newUser: User) => void;
}

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextProps>({
  user: emptyUser,
  updateUser: () => {},
});

export const UserProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User>(emptyUser);

  useEffect(() => {
    // Recupera os valores do localStorage ao inicializar.
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const updateUser = (newUser: User) => {
    const updatedUser = { ...emptyUser, ...newUser };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  // const clearUser = () => {
  //   setUser(emptyUser);
  //   localStorage.setItem('user', JSON.stringify(emptyUser));
  // };

  const context = {
    user,
    updateUser,
    // clearUser,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
