import classes from './MeetupItem.module.css';
import Card from "../../ui/Card";
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";


function MeetupItem({id, image, title, address, description}) {
    const favoritesContext = useContext(FavoritesContext);
    const isFavorite = favoritesContext.isFavorite(id);

    function toggleFavoritesHandler() {
        if (isFavorite) {
            favoritesContext.removeFavorite(id);
        } else {
            favoritesContext.addFavorite({
                id,
                title,
                image,
                address,
                description
            })
        }
    }


    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={image} alt={title}/>
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <address>{address}</address>
                <p>{description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoritesHandler}>{isFavorite ? 'Remove from Favorites' : 'Add To Favorites'}</button>
            </div>
        </Card>
    </li>
}

export default MeetupItem;