import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

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
	};

	render() {
		return (
			<div>
				<div>
					<h1>{this.props.title}</h1>
					<p>{this.props.url}</p>
					<p>{this.props.id}</p>
				</div>
				<div>
					<button
						id={this.props.id}
						title={this.props.title}
						onClick={this.completeTodo}>
						Done
					</button>
					<button
						id={this.props.id}
						title={this.props.title}
						onClick={this.openModal}>
						Edit
					</button>
				</div>
			</div>
		);
	}
}

export default Todo;
