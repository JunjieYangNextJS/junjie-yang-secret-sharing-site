import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RulesPage from "./pages/RulesPage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/rules">
          <RulesPage />
        </Route>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
