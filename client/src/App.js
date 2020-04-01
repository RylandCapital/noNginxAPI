import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component"
import ChartComponent from "./components/reacths.component"

export default function App() {
  return (
    <Router>
      <div>
        Welcome to the Syndicate API
      </div>
    </Router>
  );
}

