import './App.css';
import Headers from './components/header'
import { BrowserRouter as Router , Routes, Switch, Route } from "react-router-dom";
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import ProductComponent from './components/ProductComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Routes>
          <Route path="/" exact element={<ProductListing/>} />
          <Route path="/product/:productId" exact element={<ProductDetail/>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
