import React, { Component } from 'react';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';
import Create from './Components/Create/Create';
import Edit from './Components/Edit/Edit';
import SearchBar from './Components/Searchbar/Searchbar';
import TodoList from './Components/TodoList/TodoList';

class App extends Component {
	render() {
		return (
			<div>
				<main>
					<SearchBar />
					<Route path='/' component={TodoList} />
					<Route path='/create' component={Create} />
					<Route path='/edit' component={Edit} />
				</main>
			</div>
		);
	}
}

export default App;
