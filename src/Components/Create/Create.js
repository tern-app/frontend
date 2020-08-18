import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import './Create.css';

class Create extends Component {
	constructor() {
		super();
		this.state = {
			open: false,
			newTodo: {},
			title: '',
			body: '',
			dueDate: '',
			priority: '',
		};
	}

	openModal = (event) => {
		this.setState({ open: true });
	};

	closeModal = (event) => {
		this.setState({ open: false });
	};

	handleSubmit = (event) => {
		console.log(event.target.title.value);
		const newTodo = {
			title: this.state.title,
			body: this.state.body,
			dueDate: this.state.dueDate,
			priority: this.state.priority,
		};
		const url = `http://localhost:8080/api/bookmarks/`;
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
			},
			body: JSON.stringify({ title: this.state.title, url: this.state.body }),
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
		// this.setState({ newTodo: newTodo });
	};

	handleTitleChange = (event) => {
		this.setState({ title: event.target.value });
	};

	handleBodyChange = (event) => {
		this.setState({ body: event.target.value });
	};

	handleDueDateChange = (event) => {
		this.setState({ dueDate: event.target.value });
	};

	handlePriorityChange = (event) => {
		this.setState({ priority: event.target.value });
	};

	render() {
		console.log(this.state.newTodo);
		return (
			<div>
				<button id='openModal' onClick={this.openModal}>
					+
				</button>
				{this.state.open === true && (
					<div id='modal' display='block'>
						<div id='modal-textbox'>
							<a id='close' href='#' onClick={this.closeModal}>
								Close
							</a>
							<h1>Create a new to-do</h1>
							<form onSubmit={this.handleSubmit}>
								<label>Title:</label>
								<input
									type='text'
									name='title'
									id='title'
									onChange={this.handleTitleChange}></input>
								<label>Details:</label>
								<input
									type='text'
									name='body'
									id='body'
									onChange={this.handleBodyChange}></input>
								<label>Due Date:</label>
								<input
									type='text'
									name='dueDate'
									id='dueDate'
									onChange={this.handleDueDateChange}></input>
								<label>Priority:</label>
								<input
									type='text'
									name='priority'
									id='priority'
									onChange={this.handlePriorityChange}></input>
								<input type='submit' />
							</form>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Create;
