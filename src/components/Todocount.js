import React from 'react';

function Todocount(props) {
    return (
        <div className='text-center'>
            <p className="display-5 text-warning">Todo count</p>

            <h1 className="text-secondary">{props.todolist.length}</h1>
        </div>
    )
}

export default Todocount;
