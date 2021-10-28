import {Route, Switch} from 'react-router-dom';

import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetUpPage from "./pages/NewMeetupPage";
import FavoritesPage from "./pages/FavoritesPage";
import MainNavigation from "./components/layout/MainNavigation";


function App() {
  return (
      <div>
          <MainNavigation />
          <Switch>
            <Route path='/' exact={true}>
              <AllMeetupsPage/>
            </Route>
            <Route path='/new-meetup'>
              <NewMeetUpPage/>
            </Route>
            <Route path='/favorites'>
              <FavoritesPage/>
            </Route>
          </Switch>
      </div>
  );
}

export default App;
