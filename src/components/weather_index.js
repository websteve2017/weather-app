import React , { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchWeather } from '../actions';

class WeatherIndex extends Component {

  componentDidMount() {
    this.props.fetchWeather();
  }

	render() { 
		return (
			<div>
				weather index page here
			</div>
		);
	}

}

function mapStateToProps(state){
  return { weather: state.weather };
}

export default connect(mapStateToProps, {fetchWeather: fetchWeather})(WeatherIndex);
