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
                  <h1>Intuitive Pirate Management</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit cum voluptas in asperiores totam! Vero quae doloremque explicabo modi impedit.</p>
                  <button className="btn"><a href="/view-pirates">View Pirates</a></button>
               </div>
            </div>
         </div>
      );
   }
}