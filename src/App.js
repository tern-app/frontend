import React, { Component } from 'react';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';
import Create from './Components/Create/Create';
import Edit from './Components/Edit/Edit';
import SearchBar from './Components/Searchbar/Searchbar';
import TodoList from './Components/TodoList/TodoList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			todos: [],
			display: 'not completed',
			editTodo: {},
		};
	}

	setEditTodo = (todo) => {
		this.setState({ editTodo: todo });
	};

	setOpen = (value) => {
		this.setState({ open: value });
	};

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
		console.log(this.state.editTodo);
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

					<Edit
						editTodo={this.state.editTodo}
						setTodos={this.setTodos}
						setOpen={this.setOpen}
						open={this.state.open}
						setEditTodo={this.setEditTodo}
					/>

					<TodoList
						setEditTodo={this.setEditTodo}
						todos={this.state.todos}
						setTodos={this.setTodos}
						setDisplay={this.setDisplay}
						display={this.state.display}
						setOpen={this.setOpen}
						open={this.state.open}
					/>
					{/* <Route path='/edit' component={Edit} /> */}
				</main>
			</div>
		);
	}
}

export default App;
