import Axios from 'axios';
import React from "react";
import {useState} from "react";

const AddPage = () =>{

    const [formData, setFormdata] = useState({});

    const insertPirate = async (e) => {
        e.preventDefault();
        const response = await Axios.post('http://localhost:3000/pirates', formData);
        console.log(response);
    }

    const handleChange = (e) => {
        setFormdata({...formData, [e.target.name]: e.target.value});
    }

    return(
        <section id="pirate-form-main">
        <div className="form-wrap">
            <h1>Add a new pirate</h1>
            <p>Select a name and role!</p>
            <form onSubmit={insertPirate}>
                <div className="form-group">
                    <label htmlFor="pirate-name">Pirate Name</label>
                    <input type="text" id="pirate-name" name="name" value={formData["name"]} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="pirate-role">Pirate Role</label>
                    <select name="role" id="pirate-role" value={formData["role"]} onChange={handleChange}>
                        <option value="Captain">Captain</option>
                        <option value="Landlubber">Landlubber</option>
                        <option value="Quartermaster">Quartermaster</option>
                        <option value="Pen-Spinner">Pen-Spinner</option>
                    </select>
                </div>
                <button id="pirate-submit" className="btn">Submit Pirate</button>
            </form>
        </div>
        </section>
    )
 }

 export {AddPage}