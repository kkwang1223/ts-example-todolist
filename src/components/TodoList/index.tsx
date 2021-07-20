import styled from 'styled-components';
import { ITodos } from '../../model/ITodoList';
import { useTodoState } from '../../pages/Main/TodoContext';
import TodoItem from '../TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const todos: ITodos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;