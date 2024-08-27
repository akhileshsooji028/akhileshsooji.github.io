import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Error404 from "./components/Error404";

export default function App() {
  return (
    <Router basename="/">
      <Header />
      {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/error">
          <Error />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/timeline">
          <Timeline />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Home />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
