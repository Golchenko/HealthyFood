import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
