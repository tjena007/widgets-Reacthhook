import React from 'react';
import Accordion from './Accordion';
import Search from './Search';


const App = () => {
   const items = [
       {
           title : 'What is React?',
           content : 'React is a front end js framework'
       },
       {
        title : 'Why is React popular?',
        content : 'Developers love React!'
       },
       {
        title : 'How to use React?',
        content : 'You use React by using components'           
       }

   ]
  return(
      <div>
        <br></br>
        {/* <Accordion items={items}/> */}
        <Search/>
      </div>
  )
}


export default App;