import React from 'react';

// imports the components
import MyFirstComponent from "./components/MyFirstComponent";

class MyAllComponent extends React.Component {
   render() {
      return (
         <div>
           <MyFirstComponent />
         </div>
      );
   }
}

export default MyAllComponent;
