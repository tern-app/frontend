import React, { Component } from 'react';
import Movie from './Movie.js';
import axios from 'axios';
// import { render } from '@testing-library/react';

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieArray: [],
		};
	}

	componentDidMount() {
		const url = '/shows.json';
		axios(url)
			.then((res) => {
				this.setState({ movieArray: res.data });
			})
			.catch(console.error);
	}

	render() {
		if (!this.state.movieArray.length) {
			return null;
		}
		return (
			<div className='movies-list'>
				<h2>All our movies</h2>
				<div className='movie-list-grid'>
					{this.state.movieArray.map((movie, i) => {
						return (
							<div key={i}>
								<Movie movie={movie} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default MovieList;
