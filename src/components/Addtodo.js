
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { addTodo } from '../slices/todoSlice'

function Addtodo(props) {

    let { register, handleSubmit, formState: { errors } } = useForm()
    let dispatch = useDispatch()


    const onFormSubmit = (todoObj) => {

        //create action obj
        let actionObj = addTodo(todoObj.newtodo)
        //dispatch action object to redux store
        dispatch(actionObj)
    }

    return (
        <div>
            <p className="display-5 text-info">Add new Task</p>
            <form className='w-75 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor="todo">New Todo</label>
                    <input type="text" id="todo" className="form-control" {...register("newtodo")} />
                </div>
                <button type="submit" className="btn btn-success">Add new todo</button>
            </form>



        </div>
    )
}

export default Addtodo;
