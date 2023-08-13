import axios from "axios";
import { Switch, Route } from "react-router-dom";

import LandingPageApp from "./Components/Landing_Page/Landing_Page";
import HomePage from "./Components/Home/Home_Page";
import DetailsPage from "./Components/Detail_Page/Detail_Page";
import CreatedRecipeApp from "./Components/Created_Recipe/Created_Recipe";
import Favorites from "./Components/Favorites/Favorites";
import Error_404 from "./Components/Error/Error_404";
import styles from "./App.module.css";

axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
    <div className={styles.App}>
      <Switch>
        <Route exact path="/" component={LandingPageApp} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/created_recipe" component={CreatedRecipeApp} />
        <Route exact path="/detail/:id" component={DetailsPage} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path="*" component={Error_404} />
      </Switch>
    </div>
  );
}

export default App;
