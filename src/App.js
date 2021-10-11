import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SecretsPage from "./pages/SecretsPage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/secrets">
          <SecretsPage />
        </Route>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
