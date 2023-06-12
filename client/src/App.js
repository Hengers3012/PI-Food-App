import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing_Page_App from "./Components/Landing_Page/Landing_Page";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing_Page_App} />
          <Route exact path="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
