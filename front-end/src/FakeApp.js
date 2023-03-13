import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Register from './pages/Register';
import AdminSwitch from './Routes/AdminSwitch';
import CustomerSwitch from './Routes/CustomerSwitch';
import SellerSwitch from './Routes/SellerSwitch';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer" component={ CustomerSwitch } />
        <Route path="/seller" component={ SellerSwitch } />
        <Route path="/admin" component={ AdminSwitch } />
        <Route component={ Page404 } />
      </Switch>
    </div>
  );
}

export default App;
