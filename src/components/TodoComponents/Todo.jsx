import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div className="todo-item">
            <div>{props.id}{props.name}</div>
            <input type="checkbox"/>
        </div>
    );
}

export default Todo;