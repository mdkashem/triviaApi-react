import Axios from 'axios';
import React from "react";
import {useState} from "react";


const UpdatePlayer = () =>{
    const [id, setId]=useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   
  //  const [formData, setFormdata] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, password };
        // send the username and password to the server
        const response = await Axios.post(`http://18.222.123.135:8080/TriviaAPI/player_update/`+id,user,  {withCredentials:true}).then(
            response=>{
                alert('User Updated Success', response);

            }
        ).catch(
            error=>{
                alert('Worng credential', error.response);
            }
        );
       
        
    };
  
 /*
    const handleChange = (e) => {
        setFormdata({...formData, [e.target.name]: e.target.value});
    }
*/

    return(
        <section id="project1-form-main">
        <div className="form-wrap">
            <h1>Update Player's Password</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="pirate-name">Id</label>
                    <input type="text" id="pirate-name" name="username" value={id} onChange={({ target }) => setId(target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="pirate-name">User Name</label>
                    <input type="text" id="pirate-name" name="username" value={username} onChange={({ target }) => setUsername(target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="pirate-role">New Password</label>
                    <input type="password" id="pirate-name" name="password" value={password} onChange={({ target }) => setPassword(target.value)} />
                </div>
                <button type="submit" id="pirate-submit" className="btn">Update</button>
            </form>
        </div>
        </section>
    )
 }

 export default UpdatePlayer