import React, {Component, lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './utils/NavBar/NavBar.css';
import './pages/Home/Home.css';
import Spinner from './utils/Spinner/Spinner';
const Home  = lazy(()=>import('./pages/Home/Home')) ;
// import NavBar from './utils/NavBar/NavBar';
const NavBar  = lazy(()=>import('./utils/NavBar/NavBar')) ;
// import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue';
const SingleFullVenue  = lazy(()=>import('./pages/SingleFullVenue/SingleFullVenue')) ;
// import Modal from './utils/Modal/Modal';
const Modal  = lazy(()=>import('./utils/Modal/Modal')) ;
// import CityVenues from './pages/CityVenues/CityVenues';
const CityVenues  = lazy(()=>import('./pages/CityVenues/CityVenues')) ;
// import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess';
const PaymentSuccess  = lazy(()=>import('./pages/PaymentSuccess/PaymentSuccess')) ;
// import Account from './pages/Account/Account';
const Account  = lazy(()=>import('./pages/Account/Account')) ;
// import Search from './pages/Search/Search';
const Search = lazy(()=>import('./pages/Search/Search'));

class App extends Component {
  render() {
    return(
    <Router>
      <Suspense fallback={<Spinner/>}>
        <Route path="/" component={NavBar}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/venue/:vid" component={SingleFullVenue}/>
        <Route exact path="/city/:cityName" component={CityVenues}/>
        <Route exact path="/payment-success/:stripeToken" component={PaymentSuccess}/>
        <Route path="/account" component={Account}/>
        <Route path="/search/:searchTerm" component={Search}/>
        <Route path="/" component={Modal}/>
      </Suspense>
    </Router>
    )
  }
}



export default App;
