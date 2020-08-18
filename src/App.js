import React, { Component } from 'react';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';
import Create from './Components/Create/Create';
import Edit from './Components/Edit/Edit';
import SearchBar from './Components/Searchbar/Searchbar';
import TodoList from './Components/TodoList/TodoList';

class App extends Component {
	constructor() {
		super();
		this.state = {
			todos: [],
		};
	}

	setTodos = (todos) => {
		this.setState({ todos: todos });
	};

	render() {
		console.log(this.state.todos);
		return (
			<div>
				<nav>
					<ul>
						<li>To-do</li>
						<li>Completed</li>
					</ul>
				</nav>
				<main>
					<SearchBar />
					<Create />
					<TodoList todos={this.state.todos} setTodos={this.setTodos} />
					<Route path='/edit' component={Edit} />
				</main>
			</div>
		);
	}
}

export default App;
