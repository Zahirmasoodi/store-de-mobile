import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<Switch>
				<Route exact path='/' component={ProductsList} />
				<Route path='/details' component={Details} />
				<Route path='/cart' component={Cart} />
				<Route component={Default} />
			</Switch>
			<Modal />
		</Fragment>
	);
};

export default App;
