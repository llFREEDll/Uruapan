import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import DifUruapan from './pages/DifUruapan';
import Main from './pages/Main'


class App extends React.Component {
  render(){
    return(
      <Router>

        <Switch>
          <Route exact path = "/" component = {Main}/>
          <Route exact path = "/dif-uruapan" component = {DifUruapan}/>
      </Switch>
      </Router>
    )
  }
}

export default App;
