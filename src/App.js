
import './App.css';
import Addtodo from './components/Addtodo'
import Todolist from './components/Todolist'
import Todocount from './components/Todocount'
import { useState } from 'react';
import Adduser from './components/Adduser';
import Userlist from './components/Userslist';


function App() {

  let [todolist, setTodolist] = useState([])


  return (
    <div className="container text-center mt-5">
      <div className='row'>
        <div className="col-sm-4">
          <Addtodo setTodolist={setTodolist} todolist={todolist} />
        </div>
        <div className="col-sm-4">
          <Todolist todolist={todolist} />
        </div>
        <div className="col-sm-4">
          <Todocount todolist={todolist} />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-sm-6">
          <Adduser />
        </div>
        <div className="col-sm-6">
          <Userlist />
        </div>
      </div>
    </div>
  );
}

export default App;
