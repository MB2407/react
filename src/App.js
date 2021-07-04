import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return(

        <div className="app">
        <React.Fragment>
        <Navbar />
       <Router>        
       <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/intro" component={Intro} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
        </Switch>
        </Router>
        </React.Fragment>
        </div>
            
    );
}
export default App;
