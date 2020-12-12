import Axios from 'axios';
import React from "react";
import {useEffect,useState} from "react";


const AdminLogin = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();
  //  const [formData, setFormdata] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, password };
        // send the username and password to the server
        const response = await Axios.post(`http://127.0.0.1:8080/TriviaAPI/admin_login`,user,  {withCredentials:true});
        setUser(response.data);
        localStorage.setItem('user', response.data);
        console.log("status code "+response.status+"User "+localStorage.getItem("user"));
        
    };
   
    if (user){
        return <div>{user.name} is loggged in</div>;
    }
 /*
    const handleChange = (e) => {
        setFormdata({...formData, [e.target.name]: e.target.value});
    }
*/

    return(
        <section id="pirate-form-main">
        <div className="form-wrap">
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="pirate-name">User Name</label>
                    <input type="text" id="pirate-name" name="username" value={username} onChange={({ target }) => setUsername(target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="pirate-role">Password</label>
                    <input type="password" id="pirate-name" name="password" value={password} onChange={({ target }) => setPassword(target.value)} />
                </div>
                <button type="submit" id="pirate-submit" className="btn">login</button>
            </form>
        </div>
        </section>
    )
 }

 export {AdminLogin}