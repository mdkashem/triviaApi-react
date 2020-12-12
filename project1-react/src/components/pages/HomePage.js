import React from 'react';

// When we created our react project using create-react-app, we essentially installed these
// 1. Webpack
// 2. Babel
// 3. dev server
export default class HomePage extends React.Component {

   // Does the same thing as useEffect(() => {}, [])
   componentDidMount() {
   }

   render() {
      return (
         <div id="showcase">
            <div className="my-container">
               <div id="showcase-content">
                  <h1>Welcome to the Quiz Show!</h1>
                  <p>The player can choose an answer and be notified if it is correct or not.
The player's score is kept and updated as they play. 1 point per question answered correctly.</p>
                  <button className="btn"><a href="/">PLay</a></button>
               </div>
            </div>
         </div>
      );
   }
}