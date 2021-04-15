import React,{ useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';

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
const options = [
{
  label : 'Color Red',
  value : 'red',
  color : 'red'
},
{
 label : 'Color Blue',
 value : 'blue',
 color : 'blue'
},{
 label : 'Color Green',
 value : 'green',
 color : 'green'
}
]

const App = () => {
  const [selected,setSelected] = useState(options[0]);
  const[showDropdown,setShowDropdown] = useState(true);

  return(
      <div>
         <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        <br></br>
        {/* <Accordion items={items}/> */}
        {/* <Search/> */}
        { showDropdown ? <Dropdown selected={selected} onSelectedChange={setSelected} options={options}/> : null}
      </div>
  )
}


export default App;