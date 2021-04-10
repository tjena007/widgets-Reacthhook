import React,{ useState } from 'react';


const Accordion = ({items}) => {
    // console.log(props.items);
    const [activeIndex, setActiveIndex] = useState(null)
    const renderedItems = items.map((item,index) => {

      const onTitleClick = (index) => {
        //console.log(index);
        setActiveIndex(index);
      }

      const active = index===activeIndex ? 'active' : '';

      return(
          <React.Fragment key={item.title}>
            <div className={`title ${active}`} onClick={()=> onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
          </React.Fragment>
      )
    })
  return(
    <div className="ui styled accordion">
        {renderedItems}
    </div>
  )
  
}

export default Accordion;