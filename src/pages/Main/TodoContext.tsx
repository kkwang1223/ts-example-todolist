import React, { ReactNode, useReducer, createContext, useContext, useRef } from 'react';
import { ITodos, ITodoAction } from '../../model/ITodoList';

interface IProps {
  children: ReactNode;
}

const initialTodos: ITodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: false
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];

function todoReducer(state: ITodos, action: ITodoAction) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.todo];
    case 'TOGGLE':
      return state.map(todo => 
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const TodoStateContext: React.Context<any> = createContext(null);
const TodoDispatchContext: React.Context<any> = createContext(null);
const TodoNextIdContext: React.Context<any> = createContext(null);

export function TodoProvider(props: IProps) {
  const { children } = props;
  const [state, dispatch] = useReducer<any>(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}