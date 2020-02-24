import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar.component"
import ChartComponent from "./components/reacths.component"


function App() {
 return (
  <Router>
    <div> 
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <div className="navbar-brand">Machine Learning Models</div>
          <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto"></ul>
          </div>
        </nav>
    <Switch>
        <Route path='/spyml_chart'>
            <div className="container">
              <br/>
              <ChartComponent />
            </div>
        </Route>
    </Switch>
    </div>
  </Router>
 );
}
 
export default App;
