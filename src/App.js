import React, { Component } from 'react';
import './App.css';
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
		return (
			<div>
				<nav>
					<ul>
						<li onClick={this.changeTaskValue}>To-do</li>
						<li onClick={this.changeDisplayValue}>Completed</li>
					</ul>
				</nav>
				<main className='grid-container'>
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
				</main>
			</div>
		);
	}
}

export default App;
