import React from 'react';
import './Todo.css';

const TodoForm = (props) => {

    return (
        <div className="form-container">
            <form action="">
                <input type="text"/>
                <button className="button">Submit</button>
                <button className="button">Clear</button>
            </form>
        </div>
    );

}

export default TodoForm;