import React, { Component } from 'react';
import TodoListItem from '../TodoListItem';
//import './TodoList.css';

class TodoList extends Component {
	
	render() {
		const {todos, onDeleted} = this.props;
		const elements = todos.map((item)=>{
			const {id, ...itemProps} = item;
			return (<TodoListItem
				key={id}
				{...itemProps}
				onDeleted={() => onDeleted(id)}
			/>);
		});
		
		return (
			<ul className = "list-group todo-list">
				{elements}
			</ul>
		)
	}
}

export default TodoList;