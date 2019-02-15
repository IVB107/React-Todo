import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todoList.map(todo => {
                return (
                    <Todo 
                        key={todo.id}
                        name={todo.name} 
                        todo={todo}
                        delete={props.delete}
                        toggle={props.toggle}
                    />
                );
            })}
        </div>
    )
}
export default TodoList;