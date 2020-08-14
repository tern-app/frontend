import React, { Component } from 'react';
import Movie from './Movie.js';
import axios from 'axios';
import { render } from '@testing-library/react';

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieArray: null,
		};
	}

	componentDidMount() {
		const url = `tbd`;
		axios(url)
			.then((res) => {
				this.setState({ movieArray: res.data.results });
			})
			.catch(console.error);
	}

	render() {
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
