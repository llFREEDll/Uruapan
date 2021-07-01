import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import DifUruapan from './pages/DifUruapan';
import Main from './pages/Main'


class App extends React.Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".div-spinner");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }
  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2000));
  };
  
  render(){
    if (this.state.loading) {
      return(

        null
      )
    }
    
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
