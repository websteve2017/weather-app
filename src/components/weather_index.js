import React , { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchWeather } from '../actions';

import SiteHeader from './site_header';
import SiteFooter from './site_footer';

class WeatherIndex extends Component {

  componentDidMount() {
    this.props.fetchWeather();
  }

	render() { 
		return (
			<div>
				<SiteHeader />

				<main class="weather_main">
				weather index page here

				</main>

				<SiteFooter />
			</div>
		);
	}

}

function mapStateToProps(state){
  return { weather: state.weather };
}

export default connect(mapStateToProps, {fetchWeather: fetchWeather})(WeatherIndex);
