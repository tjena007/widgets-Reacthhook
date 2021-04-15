import React,{ useState, useEffect, useRef } from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
  const [open,setOpen] = useState(false);
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
        return(
            <div key={option.value} onClick={() => onSelectedChange(option)} className="item">
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
        </div>
      </div>
  )
}


export default Dropdown;