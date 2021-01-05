import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Extras/Navbar';
import AboutMe from './Pages/AboutMe.js';
import MyProjects from './Pages/MyProjects';
import Resume from './Pages/Resume';
import ContactMe from './Pages/ContactMe';


function App() {
  return (
    <Router>
    <div>
        <Navbar />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/MyProjects" component={MyProjects} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/ContactMe" component={ContactMe} />
    </div>
    </Router>
  );
}

export default App;
