import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './utils/NavBar/NavBar.css';
import './pages/Home/Home.css';
import NavBar from './utils/NavBar/NavBar';
import Home from './pages/Home/Home';

class App extends Component {
  render() {
    return(
    <Router>
      <Route path="/" component={NavBar}/>
      <Route path="/" component={Home}/>
    </Router>
    )
  }
}


export default App;
