import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

class Todo extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.url}</p>
			</div>
		);
	}
}

export default Todo;
