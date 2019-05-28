import React from 'react';

import Header from '../Header'

import Search from '../Search'

import TodoList from '../TodoList';

import ItemStatusFilter from '../ItemStatusFilter'

import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const todoData = [
    {label: 'Drink Coffe', important: false, id:1},
    {label: 'walk in the park', important: false, id:2},
    {label: 'making a work', important: true, id:3},
  ];

  return (
    <div className="todo">
      <Header toDo = {1} done = {3}/>
      <div className="top-panel d-flex">
        <Search />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
}

export default App;
