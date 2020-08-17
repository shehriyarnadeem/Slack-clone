import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
        </div>
      </div>
    </Router>
    // Header
    // Sidebar
    // React-router chat screen
  );
}

export default App;
