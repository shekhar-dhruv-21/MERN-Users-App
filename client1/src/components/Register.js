import React from 'react';
import axios from 'axios';

export const Register = () => {
    const RegisterUser = () => {
        axios.post("/api/insert-user", user)
        .then(window.location = "/Delete-User")
        
    }
    const user = {
        username : '',
        password : '',
        firstname : '',
        lastname : '',
        age: 0,
    }
    return (
        <div>
            <div class="regform">
                <div className="row g-3">
                    <div className="col-12">
                        User Name
                        <input type="text" className="form-control" id="username" onChange={(e) => user.username = e.target.value} placeholder="" />
                    </div>
                    <div className="col-12">
                        Password
                        <input type="password" className="form-control" id="passowrd" placeholder="" onChange={(e) => user.password = e.target.value}/>
                    </div>
                    <div className="col-md-6">
                       First Name
                        <input type="text" className="form-control" id="firstname" onChange={(e) => user.firstname = e.target.value} />
                    </div>
                    <div className="col-md-6">
                        Last Name
                        <input type="text" className="form-control" id="lastName" onChange={(e) => user.lastname = e.target.value}/>
                    </div>
                    
                    <div className="col-md-2">
                        Age
                        <input type="text" className="form-control" id="age" onChange={(e) => (user.age = Number(e.target.value))}/>
                    </div>
                    <div className="col-12">
                        <button type="submit" onClick={RegisterUser} className="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

