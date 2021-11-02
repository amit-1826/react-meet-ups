import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meet-ups/MeetupList";


function FavoritesPage() {

    const favoritesContext = useContext(FavoritesContext);

    let content;
    if (favoritesContext.favoritesTotal === 0) {
        content = <p>You dont have any favorites</p>;
    } else {
        content = <MeetupList meetups={favoritesContext.favorites} />
    }

    return <section>
        <h1>{favoritesContext.favorites && favoritesContext.favorites.length ? 'My Favorites' : 'No meetups found.'}</h1>
        {content}
    </section>
}

export default FavoritesPage;