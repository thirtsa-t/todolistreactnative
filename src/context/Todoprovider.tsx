import React, {useState} from 'react';
import TodoContext from './Todocontext';

const TodoProvider: React.FC<any> = ({children}) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Firebase',
      pending: 3,
      completed: 1,
      color: 'green',
    },
    {
      id: 2,
      title: 'Todo App server',
      pending: 3,
      completed: 1,
      color: 'skyblue',
    },
    {
      id: 3,
      title: 'React Native',
      pending: 3,
      completed: 1,
      color: 'blue',
    },
    {
      id: 4,
      title: 'Firebase',
      pending: 3,
      completed: 1,
      color: 'indigo',
    },
    {
      id: 5,
      title: 'Firebase',
      pending: 3,
      completed: 1,
      color: 'purple',
    },
    {
      id: 6,
      title: 'Firebase',
      pending: 3,
      completed: 1,
      color: 'red',
    },
    {
      id: 7,
      title: 'Firebase',
      pending: 3,
      completed: 1,
      color: 'orange',
    },
  ]);
  const addTodo = (name, color) => {
    setTodos([...todos, {title: name, color, id: Math.random()}]);
  };

  const values = {todos,addTodo};

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
export default TodoProvider;
