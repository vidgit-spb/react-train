import React from 'react';
import TodoList from './Todo/TodoList.js'



function App() {
  const todos = [
    {id:1, completed:false,title:"buy a car "},
    {id:2, completed:false,title:"buy a maslo "},
    {id:3, completed:false,title:"buy a mustash "}
  ]

  
   

  return (
    (<div className = 'wrapper'>
      <h1>React tutorial </h1>

      <TodoList todos={todos}/>
    </div>)           
  )
}

export default App;
