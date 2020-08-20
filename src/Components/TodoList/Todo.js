import React, { Component } from 'react';

class Todo extends Component {
	completeTodo = (event) => {
		console.log(event.target.id);
		const url = `https://stark-depths-63601.herokuapp.com/tasks/${event.target.id}`;
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
			},
			body: JSON.stringify({
				completed: true,
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				fetch(`https://stark-depths-63601.herokuapp.com/tasks/`)
					.then((response) => response.json())
					.then((response) => {
						this.props.setTodos(response);
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	openModal = () => {
		this.props.setOpen(true);
		const todo = {
			title: this.props.title,
			body: this.props.body,
			dueDate: this.props.dueDate,
			priority: this.props.priority,
			id: this.props.id,
		};
		this.props.setEditTodo(todo);
		// console.log(todo);
	};

	render() {
		return (
			<div className='todo'>
				<div>
					<h1>{this.props.title}</h1>
					<p>{this.props.body}</p>
					<p>{this.props.dueDate}</p>
				</div>
				<div>
					<button
						id={this.props.id}
						title={this.props.title}
						style={{ display: this.props.displayType }}
						onClick={this.completeTodo}>
						Complete
					</button>
					<button
						id={this.props.id}
						title={this.props.title}
						// body={this.props.body}
						// dueDate={this.props.dueDate}
						// priority={this.props.priority}
						onClick={this.openModal}>
						Edit
					</button>
				</div>
			</div>
		);
	}
}

export default Todo;
