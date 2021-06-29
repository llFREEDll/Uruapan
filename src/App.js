import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import Main from './pages/Main'

const App = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path = "/" component = {Main}/>
      </Switch>
  </BrowserRouter>
)

export default App;
