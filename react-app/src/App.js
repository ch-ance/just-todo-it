import React from "react";
import { Switch, Route } from "react-router-dom";
import ViewList from "./components/view-list/view-list";
import "./App.css";

function App() {
  console.log("hey");
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={ViewList} />
      </Switch>
    </div>
  );
}

export default App;
