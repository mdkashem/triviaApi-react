import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pirate from '../Pirate'

// Functional component 
const ViewPage = () => {
    const [pirates, setPirates] = useState([]);
    const getPirates = async () => {
        const response = await Axios.get('http://localhost:3000/pirates');

        setPirates(response.data);
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
        getPirates();
    }, [])

    return (
        <section id="pirate-list-main">
        <h1>Pirate List</h1>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>Pirate ID</th>
                    <th>Pirate Name</th>
                    <th>Role ID</th>
                    <th>Role Name</th>
                </tr>
            </thead>
            <tbody id="pirate-table-data">
                {
                    pirates.map(pirate=> 
                        (<Pirate pirate={pirate} key={pirate.id}/>)
                    )
                }
            </tbody>
        </table>
        </section>
    );
}

export default ViewPage;