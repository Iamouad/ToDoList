import React from 'react';
const ListTodo = ({ todos, deleteTodo }) => {
  return(
    <ul>
      {todos && todos.length > 0 ? (
        todos.map(task=>{return(
         <li key={task.id} onClick={()=>deleteTodo(task.id)}>{task.todo}
         </li>
        )}))
        
        :
        
        (<li>No Todo(s) left</li>)
      }
    </ul>
  )
}
export default ListTodo