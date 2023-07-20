import React, { createContext, useEffect, useState } from 'react';
import { SearchMusic } from '../services/searchMusicsAPI';

interface FavoritesContextProps {
  getFavorites: () => SearchMusic[];
  addFavorites: (newFavorite: SearchMusic) => void;
  remFavorites: (newFavorite: SearchMusic) => void;
}

interface FavoritesContextProviderProps {
  children: React.ReactNode;
}

export const FavoritesContext = createContext<FavoritesContextProps>({
  getFavorites: () => [],
  addFavorites: () => {},
  remFavorites: () => {},
});

export const FavoritesProvider = ({
  children,
}: FavoritesContextProviderProps) => {
  const [favorites, setFavorites] = useState<SearchMusic[]>([]);

  useEffect(() => {
    const listFavorites = localStorage.getItem('favorites');
    if (listFavorites) {
      setFavorites(JSON.parse(listFavorites));
    }
  }, []);

  const getFavorites = () => {
    const getFav = localStorage.getItem('favorites');
    const list: SearchMusic[] = getFav ? JSON.parse(getFav) : [];
    return list;
  };

  const addFavorites = (newFavorite: SearchMusic) => {
    const getList = localStorage.getItem('favorites');
    const list = getList ? JSON.parse(getList) : [];

    // Verifica se o novo favorito já existe na lista
    const isFavoriteAlreadyAdded = list.some(
      (fav: SearchMusic) => fav.trackId === newFavorite.trackId
    );

    if (!isFavoriteAlreadyAdded) {
      // Se o favorito ainda não estiver na lista, adiciona-o
      const favoritesList = [...list, newFavorite];
      setFavorites(favoritesList);
      localStorage.setItem('favorites', JSON.stringify(favoritesList));
    } else {
      // por enquanto, naõ fazer nada
    }
  };

  const remFavorites = (offFavorite: SearchMusic) => {
    const getList = localStorage.getItem('favorites');
    const list = getList ? JSON.parse(getList) : [];
    const favoritesList = list.filter(
      (fav: SearchMusic) => fav.trackId !== offFavorite.trackId
    );
    setFavorites(favoritesList);
    localStorage.setItem('favorites', JSON.stringify(favoritesList));
  };

  const context = {
    getFavorites,
    addFavorites,
    remFavorites,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};
