import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todoList.map(todo => {
                return (
                    <Todo 
                        name={todo.name} 
                        todo={todo}
                        key={todo.id}
                        delete={props.delete}
                        toggle={props.toggle}
                    />
                );
            })}
        </div>
    )
}
export default TodoList;