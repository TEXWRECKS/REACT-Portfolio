import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import MyProjects from './pages/MyProjects';
import Resume from './pages/Resume';
import ContactMe from './pages/ContactMe';


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
