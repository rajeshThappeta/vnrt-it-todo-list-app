import { addUser } from '../slices/userSlice'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'



function Adduser() {

    let { register, handleSubmit } = useForm()
    let dispatch = useDispatch()

    //form submit
    const onFormSubmit = (userObj) => {

        //create action obj
        let actionObj = addUser(userObj)
        //dispatch action obj
        dispatch(actionObj)

    }

    return (
        <div>
            <p className="display-5 fw-bold text-center">Add user</p>

            <form onSubmit={handleSubmit(onFormSubmit)}>
                <input type="text" {...register("username")} className="form-control mb-3" placeholder='Username' />
                <input type="date" {...register("dob")} className="form-control mb-3" placeholder='Date of birth' />
                <button type="submit" className="btn btn-success d-block mx-auto">Add new user</button>
            </form>
        </div>
    )
}


export default Adduser;