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
			display: 'not completed',
		};
	}

	setTodos = (todos) => {
		this.setState({ todos: todos });
	};

	setDisplay = (display) => {
		this.setState({ display: display });
	};

	changeDisplayValue = () => {
		this.setState({ display: 'completed' });
	};

	changeTaskValue = () => {
		this.setState({ display: 'not completed' });
	};

	render() {
		console.log(this.state.todos);
		return (
			<div>
				<nav>
					<ul>
						<li onClick={this.changeTaskValue}>To-do</li>
						<li onClick={this.changeDisplayValue}>Completed</li>
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
