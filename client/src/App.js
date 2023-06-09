import { BrowserRouter, Switch, Route } from "react-router-dom";
import Init_Page_App from "./Components/HomePage/Initial_Page";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Init_Page_App} />
          <Route exact path="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
