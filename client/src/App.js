import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPageApp from "./Components/Landing_Page/Landing_Page";
import HomePage from "./Components/Home/Home_Page";

import styles from "./App.module.css";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Switch>
          <Route exact path="/" component={LandingPageApp} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
