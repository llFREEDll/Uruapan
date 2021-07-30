import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Admin from './pages/Admin';
import DifUruapan from './pages/DifUruapan';
import Main from './pages/Main'
import Agua from './pages/PagosEnLinea/Agua';
import AguaAdmin from './pages/PagosEnLinea/AguaAdmin';
import LicenciaComercial from './pages/PagosEnLinea/LicenciaComercial';
import PagosEnLinea from './pages/PagosEnLinea/PagosEnLinea';
import Servicios from './pages/Servicios';
import VentanillaUnica from './pages/VentanillaUnica/VentanillaUnica';


class App extends React.Component {
  state = {
    loading: true
  }

  componentDidMount() {
  
  }
  
  render(){
    
    return(
      <Router>

        <Switch>
          <Route exact path = "/" component = {Main}/>
          <Route exact path = "/dif-uruapan" component = {DifUruapan}/>
          <Route exact path = "/servicios" component = {Servicios}/>
          <Route exact path = "/admin" component = {Admin}/>
          <Route exact path = "/tramites-en-linea" component = {PagosEnLinea}/>
          <Route exact path = "/tramites-en-linea/Agua" component = {Agua}/>
          <Route exact path = "/Admin-capasu" component = {AguaAdmin}/>
          <Route exact path = "/tramites-en-linea/licencia-comercial" component = {LicenciaComercial}/> 
          <Route exact path = "/ventanilla-unica" component = {VentanillaUnica}/> 
        </Switch> 
      </Router>
    )
  }
}

export default App;
