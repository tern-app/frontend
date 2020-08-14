import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Movie from './Movie.js';
import MovieList from './MovieList.js';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Movie App</h1>
			</header>
			<div>
				<p>This is my Movie Body</p>
				<div className='movie-grid'>
					<MovieList />
				</div>
			</div>
		</div>
	);
}

export default App;
