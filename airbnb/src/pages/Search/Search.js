import React, { Component } from 'react';
import './Search.css';
import '../Home/Home.css';
import Spinner from '../../utils/Spinner/Spinner';
import Cities from "../../utils/City/Cities";
import axios from 'axios';
import Activities from '../../utils/Activity/Activities';
import Venues from '../../utils/Venue/Venues';

class Search extends Component {

  state = {
    activities: [],
    cities: [],
    venues: [],
    apiResponse: false,
  }

  async componentDidMount() {
    const searchTerm = this.props.match.params.searchTerm;
    const url = `${window.apiHost}/search/${searchTerm}`;
    const res = await axios.get(url);
    this.setState({
      activities: res.data.activities,
      cities: res.data.cities,
      venues: res.data.venues,
      apiResponse: true
    })
  }

  render() {
    if (!this.state.apiResponse) {
      return <Spinner/>
    }
    return( 
    <div className="container-fluid lower-fold">
      <div className="row">
          <div className="col s12">
          <Cities cities={this.state.cities} header="Cities Matching Your Search"/>
          </div>
          <div className="col s12">
          <Activities activities={this.state.activities} header="Activities Matching Your Search"/>
          </div>
          <div className="col s12">
          <Venues venues={this.state.venues} header="Venues Matching Your Search" />
          </div>
      </div>
    </div>)
  }
}

export default Search;

