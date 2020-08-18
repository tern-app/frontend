import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Todo from './Todo.js';

class TodoList extends Component {
	componentDidMount() {
		const url = `https://stark-depths-63601.herokuapp.com/tasks/`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				this.props.setTodos(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				{this.props.todos.map((todo) => {
					// if (todo.completed !== true && ) {
					return <Todo title={todo.title} body={todo.url} id={todo._id} />;
					// }
				})}
			</div>
		);
	}
}

export default TodoList;
