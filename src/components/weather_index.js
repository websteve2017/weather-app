import React , { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchWeather } from '../actions';

import SiteHeader from './site_header';
import SiteFooter from './site_footer';

const Timestamp = require('react-timestamp');



class WeatherIndex extends Component {

  componentDidMount() {
    this.props.fetchWeather();
  }

	render() { 
		if(!this.props.weather.id) {
			return (
				<div>loading....</div>
			);
		}

		const { weather: { name, temp, weather, main, wind, sys } } = this.props;

		return ( 
			<div className="weather-wrapper">
				<SiteHeader />


				<main className="weather-main">
					<div className="weather-forecast-card">

						<div className="weather-icon">
							<img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} />
						</div>

						<div className="weather-city-title">
							{name}
							<span className="weather-temp">
								- {main.temp}&deg;C
							</span>
						</div>

						<div className="weather-description">
							{weather[0].description}
						</div>

						<div className="weather-info-row">
							<div className="weather-info-text">
								Min: {main.temp_min}&deg;C
							</div>
							<div className="weather-info-text">
								Max: {main.temp_max}0&deg;C
							</div>
						</div>

						<div className="weather-info-row">
							<div className="weather-info-text">
								Sunrise:  
								<Timestamp time={sys.sunrise} />
							</div>
							<div className="weather-info-text">
								Sunset:
								<Timestamp time={sys.sunset} />
							</div>
						</div>

						<div className="weather-info-row">
							<div className="weather-info-text">
								Wind speed: {wind.speed}mph
							</div>
							<div className="weather-info-text">
								Direction: {wind.deg}&deg;
							</div>
						</div>

					</div>
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
