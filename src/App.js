import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [age, setAge] = useState(18);

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            {age ? <Home /> : <Login />}
          </Route>
          {/* <Route exact path="/home">
            
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
