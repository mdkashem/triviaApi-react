import React,{useEffect, useState} from 'react';
import Axios from 'axios';
const Logout = ()=>{
    const [bye, setBye] = useState([]);
    const getLogout = async()=>{
        const response = await Axios.get('http://18.222.123.135:8080/TriviaAPI/logout',{ withCredentials: true });
   setBye(response.data);
    }
    useEffect(() => {
        getLogout();
    }, []);
    if(bye.status!==200){
        return(
            <div id="project1-form-main">
                <p>{bye}</p>
            </div>
        )

    }else{
        return (
            <div id="project1-form-main">
                <p>Logout success.</p>
            </div>
        )
            
    }

}
export default Logout;