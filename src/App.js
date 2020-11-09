import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import './App.css';

function App() {
  return (
    <>
    
    <Router>
      <div>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Intro} />
            <Route exact path="/intro" component={Intro} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
      </div>
    </Router>
    {/* <Footer /> */}
    </>
  );
}

export default App;
