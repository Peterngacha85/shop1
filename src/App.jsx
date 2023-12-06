import { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
   const [cartItems, setCartItems] = useState([]);
   

  return (
    <div>
      <header className="app-header">
        <nav >
          <div className="app-nav">
          <h1 className="logo-name">NovaShop</h1>
            <div className="app-home">
              <Link to="/">Shop</Link>
            </div>
            <div className="app-cart">
              <Link to="/cart"><i className="bi bi-cart"></i></Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="home-cart">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={() => <Cart cartItems={cartItems} />} />

        </Switch>
      </div>
      <footer className="app-footer"> <p>&copy; 2023 Peter Shop. All rights reserved.</p></footer>
    </div>
  );
}

export default App;
