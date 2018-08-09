import { Router } from '@reach/router';
import * as React from 'react';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Jokes from './pages/Jokes';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Products from './pages/Products';
class App extends React.Component {
  public render() {
    return (
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Products path="/products" />
        <Product path="/products/:productId" />
        <Contact path="/contact" />
        <Cart path="/cart" />
        <Jokes path="/jokes/:categoryName" />
        <NotFound default={true} />
      </Router>
    );
  }
}

export default App;
