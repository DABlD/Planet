import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { FAQ } from './components/FAQ';
import { About } from './components/About';
import { Index } from './components/Index';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Index}/>
          <Route path="/about" component={About}/>
          <Route path="/edit/:id" component={FAQ}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App