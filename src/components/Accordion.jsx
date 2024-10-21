import { useState } from "react";

const data= [
  {
    id:1,
    title:"Accordion One",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit minus minima quis incidunt a hic tempore in amet qui delectus laboriosam laborum optio harum illo, temporibus dicta veniam aut praesentium!"
  },
    {
    id:2,
    title:"Accordion Two",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit minus minima quis incidunt a hic tempore in amet qui delectus laboriosam laborum optio harum illo, temporibus dicta veniam aut praesentium!"
  },
    {
    id:3,
    title:"Accordion Three",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit minus minima quis incidunt a hic tempore in amet qui delectus laboriosam laborum optio harum illo, temporibus dicta veniam aut praesentium!"
  }
]
function Accordion() {
  return (
    <div className='accordion'>
        {
          data.map(item => (
           <AccordionItem key={item.id} item={item}/>
          ))
        }
    </div>
  )
}

export default Accordion;

function AccordionItem({item}){
  const [isOpen,setIsOpen]= useState(false);
  return(
    <div className= {`accordion-item ${isOpen ? "accordion__expanded": ""}`} >
      <div className='accordion-item__header' onClick={()=> setIsOpen((is) => !is)}
      >
        {item.title}
      </div>
      <div className='accordion-item__content'>{item.text}</div>
      {/* {isOpen && <div className='accordion-item__content'>{item.text}} */}
    </div>
  )
}