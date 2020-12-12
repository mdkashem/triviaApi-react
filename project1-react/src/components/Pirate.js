import React from 'react';

const Pirate = ({ pirate }) => {

   return (
      <tr>
         <td>{pirate.id}</td>
         <td>{pirate.name}</td>
         <td>{pirate.role_id}</td>
         <td>{pirate.role}</td>
      </tr>
   )
}

export default Pirate;