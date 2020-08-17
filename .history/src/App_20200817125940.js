import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import "./App.css";
import { useStatevalue } from "./StateProvider";
function App() {
  const [user, setUser] = useState(null);
  const [{ state }, dispatch] = useStatevalue();
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>

    // Header
    // Sidebar
    // React-router chat screen
  );
}

export default App;
