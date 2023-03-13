import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Register from './pages/Register';
import AdminSwitch from './Routes/FakeAdminSwitch';
import CustomerSwitch from './Routes/FakeCustomerSwitch';
import SellerSwitch from './Routes/FakeSellerSwitch';

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
