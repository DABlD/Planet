import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './components/Index';
import About from './components/About';
import FAQ from './components/FAQ';
import SolarSystem from './components/SolarSystem';
import Planet from './components/Planet';
import Create from './components/Create';

const App = () => {
  return (
    <div>
      <Router>
        <h1>Nav</h1>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/about" component={About}/>
          <Route path="/faq" component={FAQ}/>
          <Route path="/solarSystem" component={SolarSystem}/>
          <Route path="/planet/:id" component={Planet}/>
          <Route path="/create" component={Create}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App