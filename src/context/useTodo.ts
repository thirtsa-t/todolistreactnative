import {useContext} from 'react';
import TodoContext from './Todocontext';

const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be valid');
  }
  return context;
};
export default useTodo;
