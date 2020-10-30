import React, {Component} from 'react';
import SearchBox from './SearchBox';
import './Home.css';
import Spinner from '../../utils/Spinner/Spinner';
import axios from 'axios';

class Home extends Component {

  state = {
    cities: []
  }

  async componentDidMount() {
    const citiesUrl = `${window.apiHost}/cities/recommended`;
    const recommendedCities = await axios.get(citiesUrl);
    this.setState({
      cities: recommendedCities.data
    })
  }

  render() {
    if (this.state.cities.length === 0) {
      return(
        <Spinner icon="spinner" size="6x" className="spinner-wrapper"/>
      )
    }
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="home col s12">
            <div className="upper-fold">
              <SearchBox/>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }

export default Home;