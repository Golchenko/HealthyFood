import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import NavMenuMobile from "./components/NavMenuMobile"

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenuMobile />
        <Switch>
          <Route path="/products/:handle">
            <Product />
          </Route>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
