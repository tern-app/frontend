import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

class Edit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
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

	deleteTodo = (event) => {
		event.preventDefault();
		const newTodo = this.props.editTodo;

		console.log(newTodo);
		const url = `https://stark-depths-63601.herokuapp.com/tasks/${newTodo.id}`;
		fetch(url, {
			method: 'DELETE',
			// headers: {
			// 	'content-type': 'application/json',
			// 	accept: 'application/json',
			// },
			// body: JSON.stringify(newTodo),
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				fetch(`https://stark-depths-63601.herokuapp.com/tasks/`)
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
		this.props.setOpen({ open: false });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const newTodo = this.props.editTodo;

		console.log(newTodo);
		const url = `https://stark-depths-63601.herokuapp.com/tasks/${newTodo.id}`;
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
			},
			body: JSON.stringify(newTodo),
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				fetch(`https://stark-depths-63601.herokuapp.com/tasks/`)
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
		this.props.setOpen({ open: false });
	};

	handleInputChange = (event) => {
		const todo = {
			title: this.props.editTodo.title,
			body: this.props.editTodo.body,
			dueDate: this.props.editTodo.dueDate,
			priority: this.props.editTodo.priority,
			id: this.props.editTodo.id,
			...{ [event.target.id]: event.target.value },
		};
		this.props.setEditTodo(todo);
	};

	render() {
		console.log(this.props.editTodo);

		return (
			<div>
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
									value={this.props.editTodo.title}
									// defaultValue={this.props.editTodo.title}
									onChange={this.handleInputChange}
								/>
								<label>Details:</label>
								<input
									type='text'
									name='body'
									id='body'
									onChange={this.handleInputChange}
								/>
								<label>Due Date:</label>
								<input
									type='datetime-local'
									name='dueDate'
									id='dueDate'
									onChange={this.handleInputChange}
								/>
								<label>Priority:</label>
								<input
									type='number'
									min='1'
									max='5'
									name='priority'
									id='priority'
									onChange={this.handleInputChange}
								/>
								<input type='submit' value='submit' />
								<button
									// type='submit'
									// value='delete'
									onClick={this.deleteTodo}>
									Delete
								</button>
							</form>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Edit;
