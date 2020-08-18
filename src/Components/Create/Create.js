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
		this.setState({ newTodo: newTodo });
	};

	handleTitleChange = (event) => {
		this.setState({ title: event.target.value });
	};

	handleBodyChange = (event) => {
		this.setState({ title: event.target.value });
	};

	handleDueDateChange = (event) => {
		this.setState({ title: event.target.value });
	};

	handlePriorityChange = (event) => {
		this.setState({ title: event.target.value });
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
									// title={this.state.title}
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
