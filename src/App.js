import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/homePage/HomePage";
import Countries from "./pages/countries/Countries";
import LayOut from "./components/LayOut/LayOut";
import history from "./utils/history";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <LayOut>
            <Route exact path="/countries" component={Countries} />
          </LayOut>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
