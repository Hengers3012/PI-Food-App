import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPageApp from "./Components/Landing_Page/Landing_Page";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Switch>
          <Route exact path="/" component={LandingPageApp} />
          <Route exact path="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
