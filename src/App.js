import {Route, Switch} from 'react-router-dom';

import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetUpPage from "./pages/NewMeetupPage";
import FavoritesPage from "./pages/FavoritesPage";
import Layout from "./components/layout/Layout";


function App() {
  return (
      <Layout>
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
      </Layout>
  );
}

export default App;
