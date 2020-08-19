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
			display: 'completed',
		};
	}

	setTodos = (todos) => {
		this.setState({ todos: todos });
	};

	setDisplay = (display) => {
		this.setState({ display: display });
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
					<Create setTodos={this.setTodos} />
					<TodoList
						todos={this.state.todos}
						setTodos={this.setTodos}
						setDisplay={this.setDisplay}
						display={this.state.display}
					/>
					<Route path='/edit' component={Edit} />
				</main>
			</div>
		);
	}
}

export default App;
