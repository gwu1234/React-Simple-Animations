import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactAnimations from './pages/ReactAnimations';
import CssAnimations from './pages/CssAnimations';
import "antd/dist/antd.css";
import './App.css';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div className="main-content">
            <Nav />
            <Route path="/" exact component={ReactAnimations} />
            <Route path="/CssAnimations/" component={CssAnimations} />
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
