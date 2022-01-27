import React from 'react';
import { useSelector } from 'react-redux'


function Todolist() {

    //get todos state from store
    let todoList = useSelector(state => state.todos)

    return (
        <div>
            <p className="display-5 text-primary">List of todos</p>

            {/* display todo list */}
            <div className="text-center">

                {
                    todoList.map((todo, index) => <h1 key={index}>{todo}</h1>)
                }
            </div>
        </div>
    )
}

export default Todolist;
