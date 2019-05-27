import React from 'react';
import Header from './components/Header'
import Search from './components/Search';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const todoData = [
    {label: 'Drink Coffe', important: false, id:1},
    {label: 'walk in the park', important: false, id:2},
    {label: 'making a work', important: true, id:3},
  ];
  return (
    <div className="App">
      <Header/>
      <Search/>
      <TodoList todos = {todoData}/>
      <button className = "btn btn-primary">button</button>
    </div>
  );
}

export default App;
