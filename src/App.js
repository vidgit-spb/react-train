import React from 'react';
import TodoList from './Todo/TodoList.js'
import Context from './context'
import AddTodo from './Todo/AddTodo.js';



function App() {
  const  [todos,setTodos] = React.useState(
    [
      {id:1, completed:false,title:"buy a car "},
      {id:2, completed:true,title:"buy a maslo "},
      {id:3, completed:false,title:"buy a mustash "}
    ]
  
  );



  function toggleToDo(id){
    setTodos (todos.map(todo =>{
      if(todo.id ===id){
        todo.completed = !todo.completed;
      }
      return todo;
    })
    )
  }
  
  function removeTodo(id){
    setTodos(todos.filter(todo=>todo.id!==id))
  }

  function addTodo(title){
    setTodos(todos.concat([
      {
        title,
        id       :Date.now,
        completed:false
      }
    ]))  

  }

  return (
    <Context.Provider value={{removeTodo}}>
    (<div className = 'wrapper'>
      <AddTodo  onCreate = {addTodo}/>
      {todos.length? 
      (<TodoList todos={todos} onToggle={toggleToDo}/>)
      : (<p>No todos</p>)}
    </div>
    </Context.Provider>          
  )
}

export default App;
