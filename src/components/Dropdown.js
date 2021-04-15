import React,{ useState, useEffect, useRef } from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
  const [open,setOpen] = useState(false);
  const [color,setColor] = useState('');
  const ref = useRef();

  useEffect(() => {
      const onBodyClick = (event) => {
        if(ref.current.contains(event.target)){
            return;
          }
          setOpen(false);
      }
          
      document.body.addEventListener('click',onBodyClick,{capture:true});    
      return () => {
        document.body.removeEventListener('click',onBodyClick,{capture : true});
      }
  },[]);

  const renderedOptions = options.map((option) =>{
      if(selected.value === option.value){
          return null;
      }
      else{
        //   setColor(option.color);
        //   console.log(color);
        return(
            <div key={option.value} onClick={() => 
            {
                onSelectedChange(option);
                setColor(option.color);
            }
            } className="item">
                {option.label}
            </div>
        )
      }
  })
  return(
      <div>
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a color</label>
                <div onClick={()=> setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
            <div style={{color: `${color}`}}> Text color change</div>
        </div>
      </div>
  )
}


export default Dropdown;