import React from 'react'

const TodoListItem = ({label, important}) => {
	const liStyle = {
		color: important ? 'tomato' : 'black'
	}
	return (
		<div>
			<li className="list-group-item" style = {liStyle}>{label}</li>
		</div>
	)
}

export default TodoListItem;