import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomid">
              <h1>Chat scree</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>

    // Header
    // Sidebar
    // React-router chat screen
  );
}

export default App;
