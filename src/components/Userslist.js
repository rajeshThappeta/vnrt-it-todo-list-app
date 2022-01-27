import { useSelector } from 'react-redux'

function Userlist() {

    let users=useSelector(state=>state.users)

    return (
       <table className="table text-center">
           {
               users.map((userObj,index)=><tr key={index}>
                   <td>{userObj.username}</td>
                   <td>{userObj.dob}</td>
               </tr>)
           }
       </table>
    )
}


export default Userlist;