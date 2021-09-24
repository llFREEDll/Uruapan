import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Admin from './pages/Admin';
import DifUruapan from './pages/DifUruapan';
import Main from './pages/principal/Main'
// import AdminLicenciasComercial from './pages/PagosEnLinea/AdminLicenciaComercial';
// import AguaAdmin from './pages/PagosEnLinea/AguaAdmin';
// import LicenciaComercial from './pages/PagosEnLinea/LicenciaComercial';
// import Multas from './pages/PagosEnLinea/Multas';
// import MultasAdmin from './pages/PagosEnLinea/MultasAdmin';
// import PagoCapasu from './pages/PagosEnLinea/PagoCapasu';
// import PagosEnLinea from './pages/PagosEnLinea/PagosEnLinea';
import Servicios from './pages/Servicios';
import FestivalDeVelas from './pages/Turismo/FestivalDeVelas';
import LugaresTuristicos from './pages/Turismo/LugaresTristicos';
import TianguisArtesanal from './pages/Turismo/TianguisArtesanal';
import Turismo from './pages/Turismo/Turismo';
//import VentanillaUnica from './pages/VentanillaUnica/VentanillaUnica';
import AdminMain from './pages/principal/AdminMain';

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
          <Route exact path = "/Administrador-principal" component = {AdminMain}/>

          <Route exact path = "/dif-uruapan" component = {DifUruapan}/>
          <Route exact path = "/admin-dif" component = {Admin}/>


          <Route exact path = "/servicios" component = {Servicios}/>

          <Route exact path = "/turismo" component = {Turismo}/>
          <Route exact path = "/lugares-turisticos" component = {LugaresTuristicos}/>
          <Route exact path = "/tianguis-artesanal" component = {TianguisArtesanal}/>
          <Route exact path = "/festival-de-velas" component = {FestivalDeVelas}/>
          
        </Switch> 
      </Router>
    )
  }
}

export default App;

// <Route exact path = "/tramites-en-linea" component = {PagosEnLinea}/>
//           <Route exact path = "/pago-agua" component = {PagoCapasu}/>
//           <Route exact path = "/pago-multas" component = {Multas}/>
//           <Route exact path = "/licencia-comercial" component = {LicenciaComercial}/>

// <Route exact path = "/ventanilla-unica" component = {VentanillaUnica}/> 


// <Route exact path = "/Admin-capasu" component = {AguaAdmin}/>
// <Route exact path = "/Admin-lc" component = {AdminLicenciasComercial}/>
// <Route exact path = "/Admin-multas" component = {MultasAdmin}/>