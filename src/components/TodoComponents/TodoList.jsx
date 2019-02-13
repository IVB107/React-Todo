import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todoList.map(todo => {
                return (<Todo name={todo.name} key={todo.key}/>);
            })}
        </div>
    )
}
export default TodoList;