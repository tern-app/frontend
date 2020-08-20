import React, { Component } from 'react';
import './Edit.css';

class Edit extends Component {
	closeModal = (event) => {
		this.props.setOpen(false);
	};

	getCurrentTime = () => {
		let today = new Date();
		// let date =
		// 	today.getFullYear() +
		// 	'-' +
		// 	(today.getMonth() + 1) +
		// 	'-' +
		// 	today.getDate();
		// let time =
		// 	today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
		// return date + ' ' + time;
		return today;

	};

	deleteTodo = (event) => {
		event.preventDefault();
		const newTodo = this.props.editTodo;

		console.log(newTodo);
		const url = `https://stark-depths-63601.herokuapp.com/tasks/${newTodo.id}`;
		fetch(url, {
			method: 'DELETE',
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
			})
			.catch((err) => {
				console.log(err);
			});
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
						response.sort((a, b) => (new Date(b.createdDate) - new Date(a.createdDate)));
						this.props.setTodos(response);
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err);
			});
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
			<div className='edit-grid-container'>
				{this.props.open === true && (
					<div id='modal' display='block'>
						<div id='modal-textbox'>
							<a
								id='close'
								href='#'
								className='closeButton'
								onClick={this.closeModal}>
								x
							</a>
							<h1 className='modalH1'>Update to-do</h1>
							<form onSubmit={this.handleSubmit}>
								<div className='editInputs'>
									<div>
										<label>Title:</label>
										<input
											className='inputField'
											required
											type='text'
											name='title'
											id='title'
											value={this.props.editTodo.title}
											// defaultValue={this.props.editTodo.title}
											onChange={this.handleInputChange}
										/>
									</div>
									<div>
										<label>Details:</label>
										<input
											className='inputField'
											type='text'
											name='body'
											id='body'
											value={this.props.editTodo.body}
											onChange={this.handleInputChange}
										/>
									</div>
									<div>
										<label>Due Date:</label>
										<input
											className='inputField'
											type='datetime-local'
											name='dueDate'
											id='dueDate'
											value={this.props.editTodo.dueDate}
											onChange={this.handleInputChange}
										/>
									</div>
									<div>
										<label>Priority:</label>
										<input
											type='number'
											min='1'
											max='5'
											name='priority'
											id='priority'
											value={this.props.editTodo.priority}
											onChange={this.handleInputChange}
										/>
									</div>
								</div>
								<div>
									<input
										type='submit'
										className='submitButton'
										value='submit'
									/>
								</div>
								<div>
									<button
										// type='submit'
										// value='delete'
										onClick={this.deleteTodo}>
										Delete
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Edit;
