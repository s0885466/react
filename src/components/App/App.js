import React, {Component} from 'react';

import Header from '../Header'

import Search from '../Search'

import TodoList from '../TodoList';

import ItemStatusFilter from '../ItemStatusFilter'

import ItemAddForm from '../ItemAddForm';

import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component{

  maxId = 100;

  state = {
    todoData:[
      {label: 'Drink Coffe', important: false, id:1},
      {label: 'walk in the park', important: false, id:2},
      {label: 'making a work', important: true, id:3}
  ]};

  deleteItem = (id) => {
    const {todoData} = this.state;
    //const newState = todoData.filter((el)=>el.id !== id );
    const index = todoData.findIndex(el => el.id === id);
    const newState = [...todoData.slice(0,index), ...todoData.slice(index+1)]
    this.setState((state)=>{
      return {todoData: newState}
    });
  };

  addItem = (text) => {
   
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({todoData})=>{
      const newArr = [...todoData,newItem];
      console.log(newArr);
      return {todoData: newArr}
    });
  }

 render(){
  return (
    <div className="todo">
      <Header toDo = {1} done = {3}/>
      <div className="top-panel d-flex">
        <Search />
        <ItemStatusFilter />
      </div>

      <TodoList 
      todos={this.state.todoData} 
      onDeleted = {(id)=> this.deleteItem(id)}
      />
      <ItemAddForm
      addItem = {this.addItem}
      />
    </div>
  );
 }
 
}


