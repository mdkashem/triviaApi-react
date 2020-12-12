import Axios from 'axios';
import React, { useEffect, useState } from 'react';
const SearchPlayer = () => {
    const [id, setId]=useState("");
    const [newPass, setNewPass]=useState("");
    const [player, setPlayer] = useState([]);
    const getPlayer = async (e) => {
        e.preventDefault();
        const response = await Axios.get('http://18.222.123.135:8080/TriviaAPI/players/'+id, { withCredentials: true }).then(response=>{
            setPlayer(response.data);
            console.log(response.data);
        }
  
        ).catch((error)=>{
            alert('The Player '+ id+' does not exist', error.response);
        }

            );   
    }
    
/*
    useEffect(() => {
        getPlayer();
    }, [])
   */
     return ( 
        <section id="project1-list-main"> 
        <section id="project1-form-main">
        <div className="form-wrap">
        <h1>Search Player By Id</h1>
            <form onSubmit={getPlayer}>
                <div className="form-group">
                    <label htmlFor="pirate-name">Enter a Player's Id</label>
                    <input type="text" id="pirate-name" name="username" value={id} onChange={({ target }) => setId(target.value)} />
                </div>
               
                <button type="submit" id="pirate-submit" className="btn">Search</button>
            </form>
            </div>
            </section>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                <th>ID</th>
                <th>ROLE</th>
                <th>User Name</th>
                <th>password</th>
                </tr>
                </thead>
                <tbody id="project1-table-data">
                {
                  
                    (<tr><td>{player.id}</td><td>{player.role}</td><td>{player.username}</td>
                    <td>{player.password} </td>
                    </tr>)
                    
                        
                    
                }
            </tbody>
            </table>
            </section>
    );
            

}
    export default SearchPlayer;