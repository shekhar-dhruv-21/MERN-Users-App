import React, { useState, useEffect} from 'react'
import axios from 'axios'
export const DeleteUser = () => {
    const [alluser, setalluser] = useState([]);
    useEffect(() => {
        axios.get("api/list")
        .then((res) => setalluser(res.data));
    })
    const deleteUser = (id) => {
        axios.delete(`api/delete-user/${id}`)
    }
    return (
        <div className='regform'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope='col'>User Name</th>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Age</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {alluser.map((d) =>
                        <tr>
                            <td>{d.username}</td>
                            <td>{d.firstname}</td>
                            <td>{d.lastname}</td>
                            <td>{d.age}</td>
                            <td><button onClick={() => deleteUser(d._id)} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    )
}
export default DeleteUser
