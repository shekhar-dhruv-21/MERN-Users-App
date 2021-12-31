import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Login = () => {
    // const [login,setLogin] = useState([])
        let obj = "";
        const loginUser = () => {
            console.log(user.username);
            console.log(user.password);
            axios
            .post("/api/Login",user)
            .then((res) => {
                if(!res.data){
                    console.log("Incorrect");
                    document.getElementById("output").innerHTML = "User Name or Password incorrect !!";
                }else{
                    window.location = "/Register"
                }
            }
            );
            console.log(obj.data);
        }
    const user = {
        username : '',
        password :'',
    }
    return (
        <div className='regform'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">User Name</label>
                    <input type="text" class="form-control" id="Username" onChange={(e) => user.username = e.target.value} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="Passord" onChange={(e) => user.password = e.target.value} />
                </div>
                <button type="submit" onClick={loginUser} class="btn btn-primary">Login</button>
                <div id="output" ></div>
                {/* {login.map((d) => <div>{d.chlogin}</div>)} */}
        </div>
        )
}
export default Login