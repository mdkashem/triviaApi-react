import Axios from 'axios';
import React, { useEffect, useState } from 'react';
const ViewPlayer = () => {
    const [players, setPlayer] = useState([]);
    const getPlayers = async () => {
        const response = await Axios.get('http://127.0.0.1:8080/TriviaAPI/players', { withCredentials: true });

        setPlayer(response.data);
        console.log(response.data);
    }

    // UseEffect is what is known as a hook
    // useEffect takes advantage of the component lifecycle,
    // There's essentially three different scenarios that useEffect will invoke the callback function
    // 1. You pass in the callback with no arguments
    //      -> Call the callback whenever you first mount the component, and whenever the component is re-rendered
    // 2. You pass in the callback with an empty array
    //      -> Call the callback whenever you first mount the component
    // 3. You pass in the callback with an array of dependencies (variables) 
    //      -> Call the callback whenever you first mount the component AND (whenever the component is re-rendered AND the variable value changes)

    // In this example, we only invoke this function the first time the component is mounted.
    useEffect(() => {
        getPlayers();
    }, [])

    return ( 
        <section id="project1-list-main">    
            <table className="table">
              <thead className="thead-dark">
                <tr>
                <th>ID</th>
                <th>ROLE</th>
                <th>Name</th>
                <th>Rounds Info</th>
                </tr>
                </thead>
                <tbody id="project1-table-data">
                {
                    players.map(function(d, idx){
                        return (<tr key = {idx}><td>{d.id}</td><td>{d.role}</td><td>{d.username}</td>
                        <td>
                <table className="table">
              <thead className="thead-dark">
                <tr>
                <th>ID</th>
                <th>player id</th>
                <th>Score</th>
                <th>Date</th>
                </tr>
                </thead>
                            {d.rounds_played.map(function(d, idx){
                            return <tr key = {idx}><td>{d.id} </td> <td>{d.player_id}</td> <td>{d.score}</td> <td>{d.date}</td></tr>
                        })}
                        
                    </table></td>
                        </tr>)
                    } 
                        
                    )
                }
            </tbody>
            </table>
            </section>
    );

}
    export default ViewPlayer;