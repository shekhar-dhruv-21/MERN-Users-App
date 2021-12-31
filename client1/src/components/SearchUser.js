import {React, useState} from 'react'
import axios from 'axios'

export const SearchUser = (props) => {
    const [users,setUsers] = useState([])
    const [user,setUser] = useState("")
    const getUser = () => {
        console.log(user);
        axios.get(`/api/search-user/${user}`)
        .then((res) => setUsers(res.data));
    }
    const updateuser = () => {
        axios.put(`/api/update/${user}`,getuser)
        .then(window.location("delete-user"))
    }
    const getuser = {
        username : "",
        password : "",
        firstname : "",
        lastname : "",
        age : 0,
    }
    return (
        <div className='regform'>
            <h1> Search User </h1>
            <div className="d-flex mt-5 mb-5">
                <input className="form-control me-2" placeholder="Search" onChange={e => setUser(e.target.value)} aria-label="Search" />
                <button onClick={getUser} className="btn btn-outline-success" type="submit">Search</button>
            </div>
            {users.map((d) => 
            <div className='regform'>
                User Name <input className="form-control me-2 mt-1" value={d.username} onChange={(e) => e.getuser.username = e.target.value}/><br />
                First Name <input className="form-control me-2 mt-1" value={d.firstname} onChange={(e) => e.getuser.firstname = e.target.value}/><br />
                Last Name <input className="form-control me-2 mt-1" value={d.lastname} onChange={(e) => e.getuser.lastname = e.target.value}/><br />
                Age <input className="form-control me-2 mt-1" value={d.age} onChange={(e) => e.getuser.age = e.target.value}/><br />
                <button className='btn btn-primary mt-3' onClick={updateuser} >Update</button>
            </div>
            )}
        </div>
    )
}
export default SearchUser