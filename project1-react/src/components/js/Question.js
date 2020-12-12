import React from 'react';

const Question = ({ question }) => {

   return (
      <tr>
         <td>{question.id}</td>
         <td>{question.question}</td>
         <td>{question.incorrect[0]}</td>
         <td>{question.incorrect[1]}</td>
         <td>{question.incorrect[2]}</td>
         <td>{question.correct}</td>
         
      </tr>
   )
}

export default Question;