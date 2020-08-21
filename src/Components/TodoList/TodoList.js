import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {
	componentDidMount() {
		const url = `https://stark-depths-63601.herokuapp.com/tasks/`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				response.sort(
					(a, b) => new Date(b.createdDate) - new Date(a.createdDate)
				);
				console.log(response);
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
					// let backgroundColor;
					// if (this.props.priority === 5) {
					// 	backgroundColor = 'red';
					// }
					if (this.props.display === 'completed') {
						if (todo.completed !== false) {
							return (
								<Todo
									priority={todo.priority}
									setEditTodo={this.props.setEditTodo}
									setOpen={this.props.setOpen}
									open={this.props.open}
									setTodos={this.props.setTodos}
									key={todo._id}
									title={todo.title}
									body={todo.body}
									id={todo._id}
									completed={todo.completed}
									backgroundColor={this.backgroundColor}
									displayType='none'
								/>
							);
						}
					} else {
						if (todo.completed !== true) {
							return (
								<Todo
									setEditTodo={this.props.setEditTodo}
									setOpen={this.props.setOpen}
									open={this.props.open}
									setTodos={this.props.setTodos}
									key={todo._id}
									title={todo.title}
									body={todo.body}
									id={todo._id}
									completed={todo.completed}
									dueDate={todo.dueDate}
									priority={todo.priority}
								/>
							);
						}
					}
				})}
			</div>
		);
	}
}

export default TodoList;
