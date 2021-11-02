import {Link} from "react-router-dom";
import classes from './MainNavigation.module.css';
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {

    const favoritesContext = useContext(FavoritesContext);

    return <header className={classes.header}>
        <div className={classes.logo}>React Meet Ups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meet Ups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meet Up</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites <span className={classes.badge}>{favoritesContext.favoritesTotal}</span> </Link>
                </li>
            </ul>
        </nav>
    </header>;
}

export default MainNavigation;