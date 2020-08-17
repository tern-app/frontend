import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import './Create.css';

class Create extends Component {
	constructor() {
		super();
		this.state = {
			open: false,
		};
	}

	openModal = (event) => {
		this.setState({ open: true });
	};

	closeModal = (event) => {
		this.setState({ open: false });
	};

	render() {
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
							<form>
								<label>Title:</label>
								<input type='text' name='title' id='title'></input>
								<label>Details:</label>
								<input type='text' name='body' id='body'></input>
								<label>Due Date:</label>
								<input type='text' name='dueDate' id='dueDate'></input>
								<label>Priority:</label>
								<input type='text' name='priority' id='priority'></input>
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
