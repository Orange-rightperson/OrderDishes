import React from 'react';
import './assets/css/App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Content from "./components/Content";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/content" component={Content}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Router>
    );
}

export default App;
