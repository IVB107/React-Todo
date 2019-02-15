import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div className={`todo-item ${props.todo.completed ? 'completed' : null}`}>
            <div>{props.name}</div>
            <div>
                <input 
                    type="checkbox" 
                    onClick={() => props.toggle(props.todo.id)}
                />
                <button onClick={() => props.delete(props.todo.id)}>Delete</button>   
            </div>
        </div>
    );
}

export default Todo;