import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
 }

export const useTodos = () => {

    const [ todos , dispatchTodoAction ] = useReducer(todoReducer, [], init);

    const handleNewTodo = (todo) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatchTodoAction( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatchTodoAction({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatchTodoAction({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]);

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo

  }
}
