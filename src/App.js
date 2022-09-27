import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import ContactUs from "./ContactUs";
import './App.css'


function App() {

  return <Router>
<nav>
    <Link to="/" className="link">Shop</Link>
    <Link to="/about" className="link">About</Link>
    <Link to="/contactUs" className="link"> Contact </Link>
</nav>

<Routes> 
  <Route path="/" element= { <Home/> } />
  <Route path="/about" element= { <About/> } />
  <Route path="/contactUs" element= { <ContactUs/> }/>

</Routes>
</Router> 

}

export default App;
