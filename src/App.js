import React from 'react';
import TodoList from './Todo/TodoList.js'



function App() {
  let todos = [
    {id:1, completed:false,title:"buy a car "},
    {id:2, completed:false,title:"buy a maslo "},
    {id:3, completed:false,title:"buy a mustash "}
  ]


  function toggleToDo(id){
    todos = todos.map(todo =>{
      if(todo.id ===id){
        todo.completed = !todo.completed;
      }
      return todo;
    })
  }
  
  
  return (
    (<div className = 'wrapper'>
      <h1>React tutorial </h1>

      <TodoList todos={todos} onToggle={toggleToDo}/>
    </div>)           
  )
}

export default App;
