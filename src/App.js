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
import LongboardList from './components/product/product-list/LongboardList';
import BearingsList from './components/product/product-list/BearingsList';
import TrucksList from './components/product/product-list/TrucksList';
import WheelsList from './components/product/product-list/WheelsList';
import SearchList from './components/product/product-list/SearchList';
import Admin from './components/admin/Admin';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/longboard" component={LongboardList} />
        <Route exact path="/bearings" component={BearingsList} />
        <Route exact path="/trucks" component={TrucksList} />
        <Route exact path="/wheels" component={WheelsList} />
        <Route exact path="/search" component={SearchList} />
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
