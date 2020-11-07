import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './utils/NavBar/NavBar.css';
import './pages/Home/Home.css';
import NavBar from './utils/NavBar/NavBar';
import Home from './pages/Home/Home';
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue';
import Modal from './utils/Modal/Modal';

class App extends Component {
  render() {
    return(
    <Router>
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/venue/:vid" component={SingleFullVenue}/>
      <Route path="/" component={Modal}/>
    </Router>
    )
  }
}



export default App;
