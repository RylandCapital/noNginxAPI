import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar.component"
import ChartComponent from "./components/reacths.component"


function App() {
 return (
  <Router>
    <div>
      <Switch>
        <Route path='/spyml_model'>
            <div className="container">
              <Navbar />
              <br/>
              <ChartComponent />
            </div>
        </Route>
        <Route path = '/'>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/spyml_model" className="navbar-brand">Syndicate Dashboard Prototype</Link>
          <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto"></ul>
          </div>
        </nav>
        <h3> Welcome to the Syndicate </h3>
        With over 10 years experience at the quantitave market analysis, the Syndicate 
        team hope to provide you with most actionable trading models using a variety of
        machine learning techniques
        </Route>
      </Switch>
    </div>
  </Router>
 );
}
 
export default App;
