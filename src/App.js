import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Admin from './pages/Admin';
import DifUruapan from './pages/DifUruapan';
import Main from './pages/Main'
import AdminLicenciasComercial from './pages/PagosEnLinea/AdminLicenciaComercial';
import AguaAdmin from './pages/PagosEnLinea/AguaAdmin';
import LicenciaComercial from './pages/PagosEnLinea/LicenciaComercial';
import multas from './pages/PagosEnLinea/multas';
import PagoCapasu from './pages/PagosEnLinea/PagoCapasu';
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
          
          <Route exact path = "/tramites-en-linea" component = {PagosEnLinea}/>
          <Route exact path = "/pago-agua" component = {PagoCapasu}/>
          <Route exact path = "/pago-multas" component = {multas}/>
          <Route exact path = "/licencia-comercial" component = {LicenciaComercial}/>

          <Route exact path = "/ventanilla-unica" component = {VentanillaUnica}/> 

          <Route exact path = "/admin" component = {Admin}/>
          <Route exact path = "/Admin-capasu" component = {AguaAdmin}/>
          <Route exact path = "/Admin-lc" component = {AdminLicenciasComercial}/>
        </Switch> 
      </Router>
    )
  }
}

export default App;
