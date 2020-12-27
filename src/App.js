import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/home.js";
import Saved from "./pages/saved.js"
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Books />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;