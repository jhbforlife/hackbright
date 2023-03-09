// External
import * as FileSystem from 'expo-file-system';
import { createContext, useContext, useRef } from 'react';

// Global constants
const FavoritesContext = createContext();
const favoritesPath = FileSystem.documentDirectory + 'favorites';

// FavoritesContext wrapper
const FavoritesProvider = ({ children }) => {
  // Checks to see if a recipe id is currently favorited
  const isFavorite = (id) => {
    return Object.keys(favorites.current.list).includes(`${id}`);
  };

  // Reads favorites file and updates the favorites.current.list
  const readFavorites = async () => {
    try {
      const read = await FileSystem.readAsStringAsync(favoritesPath);
      const json = await JSON.parse(read);
      favorites.current.list = json;
    } catch (error) {
      console.log(error.message);
    }
  };

  // Writes to the favorites file and updates the favorites.current.list
  const writeFavorites = async (item) => {
    try {
      const newList = { ...favorites.current.list };
      isFavorite(item.id) ? delete newList[item.id] : (newList[item.id] = item);
      const newListString = JSON.stringify(newList);
      await FileSystem.writeAsStringAsync(favoritesPath, newListString);
      favorites.current.list = newList;
    } catch (error) {
      console.log(error.message);
    }
  };

  // Context to share
  const favorites = useRef({
    list: {},
    isFavorite: isFavorite,
    readFavorites: readFavorites,
    writeFavorites: writeFavorites,
  });

  return (
    <FavoritesContext.Provider value={favorites}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Creates the favorites file on app load if it doesn't exist
const createFavorites = async () => {
  try {
    const exists = await FileSystem.getInfoAsync(favoritesPath);
    if (!exists.exists) {
      await FileSystem.writeAsStringAsync(favoritesPath, '');
      return;
    }
  } catch (error) {
    console.log(error.message);
  }
};

// Custom hook to access FavoritesContext
const useFavorites = () => {
  return useContext(FavoritesContext);
};

export { FavoritesProvider, createFavorites, useFavorites };
