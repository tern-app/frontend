import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

class Edit extends Component {
	constructor() {
		super();
		this.state = {
			// open: false,
			newTodo: {},
			title: '',
			body: '',
			createdDate: '',
			priority: '',
			completed: false,
			completedDate: '',
			dueDate: '',
		};
	}

	// openModal = (event) => {
	// 	this.setState({ open: true });
	// };

	closeModal = (event) => {
		this.props.setOpen(false);
	};

	getCurrentTime = () => {
		let today = new Date();
		let date =
			today.getFullYear() +
			'-' +
			(today.getMonth() + 1) +
			'-' +
			today.getDate();
		let time =
			today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
		return date + ' ' + time;
	};

	handleSubmit = (event) => {
		// event.preventDefault();
		const newTodo = {
			title: this.state.title,
			body: this.state.body,
			createdDate: this.getCurrentTime(),
			priority: this.state.priority,
			completed: false,
			completedDate: '',
			dueDate: this.state.dueDate,
		};
		console.log(newTodo);
		const url = `https://stark-depths-63601.herokuapp.com/tasks/`;
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
			},
			body: JSON.stringify(newTodo),
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				fetch(url)
					.then((response) => response.json())
					.then((response) => {
						this.props.setTodos(response);
					})
					.catch((err) => {
						console.log(err);
					});
				// this.props.setTodos(response);
			})
			.catch((err) => {
				console.log(err);
			});
		// const url = `https://stark-depths-63601.herokuapp.com/tasks/`;

		this.setState({ open: false });
	};

	handleInputChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

	render() {
		return (
			<div>
				{/* <button id='openModal' onClick={this.openModal}>
					+
				</button> */}
				{this.props.open === true && (
					<div id='modal' display='block'>
						<div id='modal-textbox'>
							<a id='close' href='#' onClick={this.closeModal}>
								Close
							</a>
							<h1>Update to-do</h1>
							<form onSubmit={this.handleSubmit}>
								<label>Title:</label>
								<input
									required
									type='text'
									name='title'
									id='title'
									onChange={this.handleInputChange}></input>
								<label>Details:</label>
								<input
									type='text'
									name='body'
									id='body'
									onChange={this.handleInputChange}></input>
								<label>Due Date:</label>
								<input
									type='datetime-local'
									name='dueDate'
									id='dueDate'
									onChange={this.handleInputChange}></input>
								<label>Priority:</label>
								<input
									type='number'
									min='1'
									max='5'
									name='priority'
									id='priority'
									onChange={this.handleInputChange}></input>
								<input type='submit' value='save' />
							</form>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Edit;
