import React, { Component } from 'react';

// id, title, and image

class Movie extends Component {
	render() {
		return (
			<div className='movie-card'>
				<div>
					<img src={this.props.url} alt='alt text' />
				</div>
				<div>
					<p className='movie-title'>{this.props.movie.title}</p>
				</div>
			</div>
		);
	}
}

export default Movie;
