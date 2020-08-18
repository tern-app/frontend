import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

class Todo extends Component {
	completeTodo = (event) => {
		console.log(event.target.title);
		// const completed = {
		// 	completed: true,
		// };
		const url = `http://localhost:8000/api/bookmarks/${event.target.title}`;
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
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
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
				</div>
			</div>
		);
	}
}

export default Todo;
