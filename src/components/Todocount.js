import React from 'react';
import { useSelector } from 'react-redux'


function Todocount() {

    //get todos state from redux store
    let todoList = useSelector(state => state.todos)

    return (
        <div className='text-center'>
            <p className="display-5 text-warning">Todo count</p>

            <h1 className="text-secondary">{todoList.length}</h1>
        </div>
    )
}

export default Todocount;
