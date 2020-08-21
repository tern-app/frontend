import React, { Component } from 'react';
import './Create.css';

class Create extends Component {
	constructor() {
		super();
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

	openModal = (event) => {
		this.setState({ open: true });
	};

	closeModal = (event) => {
		this.setState({ open: false });
	};

	getCurrentTime = () => {
		let today = new Date();
		return today;
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
						response.sort(
							(a, b) => new Date(b.createdDate) - new Date(a.createdDate)
						);
						this.props.setTodos(response);
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err);
			});

		this.setState({ open: false });
	};

	handleInputChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

	render() {
		return (
			<div>
				<button
					id='openModal'
					className='createButton'
					onClick={this.openModal}>
					NEW TASK
				</button>
				{this.state.open === true && (
					<div id='modal' display='block'>
						<div id='modal-textbox'>
							<a
								id='close'
								className='closeButton'
								href='#'
								onClick={this.closeModal}>
								x
							</a>
							<h1 className='modalH1'>Create a new to-do</h1>
							<form onSubmit={this.handleSubmit}>
								<div className='editInputs'>
									<div>
										<label>Title:</label>
										<input
											required
											className='inputField'
											type='text'
											name='title'
											id='title'
											onChange={this.handleInputChange}></input>
									</div>
									<div>
										<label>Details:</label>
										<input
											className='inputField'
											type='text'
											name='body'
											id='body'
											onChange={this.handleInputChange}></input>
									</div>
									<div>
										<label>Due Date:</label>
										<input
											className='inputField'
											type='datetime-local'
											name='dueDate'
											id='dueDate'
											onChange={this.handleInputChange}></input>
									</div>
									<div>
										<label>Priority:</label>
										<input
											required
											type='number'
											min='1'
											max='5'
											name='priority'
											id='priority'
											onChange={this.handleInputChange}></input>
									</div>
								</div>
								<input type='submit' className='submitButton' />
							</form>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Create;
