import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/product/modal/Modal';
import Details from './components/product/details/Details';
import Pack from './components/pack/Pack';
import Default from './components/default/Default';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/product/product-list/ProductList';
import Admin from './components/admin/Admin';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/pack" component={Pack} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
