import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Question from '../js/Question'
const ViewQuestion = () => {
    const [questions, setQuestions] = useState([]);
    const getQuestions = async () => {
        const response = await Axios.get('http://127.0.0.1:8080/TriviaAPI/questions', { withCredentials: true });

        setQuestions(response.data);
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
        getQuestions();
    }, [])

    return (
        <section id="project1-list-main">
        <h1>Question List</h1>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>Question ID</th>
                    <th>Question</th>
                    <th>Option-1</th>
                    <th>Option-2</th>
                    <th>Option-3</th>
                    <th>Option-4( Correct Answer)</th>
                </tr>
            </thead>
            <tbody id="project1-table-data">
                {
                    questions.map(question=> 
                        (<Question question={question} key={question.id}/>)
                    )
                }
            </tbody>
        </table>
        </section>
    );

}
    export default ViewQuestion;