import { Route } from 'react-router-dom';

import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetUpPage from "./pages/NewMeetupPage";
import FavoritesPage from "./pages/FavoritesPage";


function App() {
  return (
      <div>
        <Route path='/' exact={true}>
          <AllMeetupsPage/>
        </Route>
        <Route path='/new-meetup'>
          <NewMeetUpPage/>
        </Route>
        <Route path='/favorites'>
          <FavoritesPage/>
        </Route>
      </div>

  );
}

export default App;
