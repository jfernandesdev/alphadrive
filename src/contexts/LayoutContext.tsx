import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import InputSearch from '../components/InputSearch';
import { ProfileButton } from '../components/ProfileButton';

import { MenuItems } from '../components/MenuItems';

import { Grid, Container } from './styles';

type User = {
  name: string;
  email: string;
  avatar?: string;
};

type LayoutContextData = {
  user: User;
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

type LayoutContextProviderProps = {
  children: ReactNode;
}

export const LayoutContext = createContext({} as LayoutContextData);

export function LayoutContextProvider({ children} : LayoutContextProviderProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(()=> {
    setIsCollapsed(isCollapsed);
  }, [isCollapsed]);

  const user = {
    name: "Jeferson Fernandes",
    email: "jfernandesdev@gmail.com",
    avatar: "https://i.ibb.co/4Wp88YP/foto-perfil.jpg",
  }
  
  return (
    <LayoutContext.Provider value={{user, isCollapsed, setIsCollapsed}}>
      <Grid className={isCollapsed ? 'menuIsCollapsed' : ''}>
        <MenuItems />
        <InputSearch />
        <Container>
            {children}
        </Container>
        <ProfileButton />
      </Grid>
    </LayoutContext.Provider>
  )
}

export const useLayout = () => {
  return useContext(LayoutContext);
}