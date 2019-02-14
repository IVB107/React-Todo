import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div className="todo-item">
            <div>{props.name}</div>
            <div>
                <input type="checkbox"/>

                <button onClick={() => props.delete(props.todo.id)}>Delete</button>   
            </div>
        </div>
    );
}

export default Todo;