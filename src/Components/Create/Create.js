import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

class Create extends Component {
	render() {
		return (
			<div id='modal'>
				<a id='close' href='#'>
					Close
				</a>
				<h1>Create a new to-do</h1>
				<form>
					<label for='title'>Title:</label>
					<input type='text' name='title' id='title'></input>
					<label for='body'>Details:</label>
					<input type='text' name='body' id='body'></input>
					<label for='dueDate'>Due Date:</label>
					<input type='text' name='dueDate' id='dueDate'></input>
					<label for='priority'>Priority:</label>
					<input type='text' name='priority' id='priority'></input>
				</form>
			</div>
		);
	}
}

export default Create;
