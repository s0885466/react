import React, { Component } from 'react';
import TodoListItem from '../TodoListItem';
//import './TodoList.css';

class TodoList extends Component {
	
	render() {
		const {todos} = this.props;
		const elements = todos.map((item, i)=>{
			const {id, ...itemProps} = item;
			return (<TodoListItem
				key={id}
				{...itemProps}
			/>);
		});
		console.log(elements);
		return (
			<ul className = "list-group todo-list">
				{elements}
			</ul>
		)
	}
}

export default TodoList;