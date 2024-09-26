import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form  className="TodoForm" onSubmit={handleSubmit} >
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}  placeholder='Update task' className="todo-input" />
    <button type="submit" className='todo-btn'>Update Task</button>
  </form>
  )
}
