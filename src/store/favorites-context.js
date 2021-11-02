import {createContext, useState} from 'react';

const FavoritesContext = createContext({
    favorites: [],
    favoritesTotal: 0,
    addFavorite: (meetUpItem) => {},
    removeFavorite: (meetUpId) => {},
    isFavorite: (meetUpId) => {}
})

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoritesHandler(favoriteMeetUp) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetUp);
        });
    }

    function removeFavoritesHandler(meetupId) {
        setUserFavorites(prevFavorites => {
            return prevFavorites.filter((fav) => fav.id !== meetupId);
        })
    }

    function isFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        favoritesTotal: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        isFavorite: isFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;
