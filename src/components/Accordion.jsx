import { useState } from "react";
import {ChevronDownIcon} from "@heroicons/react/24/outline"
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
  const[open, setOpen] = useState(null);
  return (
    <div className='accordion'>
        {
          data.map(item => (
           <AccordionItem key={item.id} item={item} setOpen={setOpen} open={open}/>
          ))
        }
    </div>
  )
}

export default Accordion;

function AccordionItem({item, setOpen, open}){
  // const [isOpen,setIsOpen]= useState(false);
  const isOpen = item.id === open;
  return(
    <div className= {`accordion-item ${isOpen ? "accordion__expanded": ""}`} >
      <div className='accordion-item__header' onClick={() => setOpen(item.id)}>
        <div>{item.title}</div>
        <ChevronDownIcon className="accordion-item__chevron"
        // style={{
        //   width:"1.2rem", 
        //   transition:"all 0.2s ease-out",
        //   rotate:isOpen? "180deg":"0deg",
        //   }}
           />
      </div>
      <div className='accordion-item__content'>{item.text}</div>
      {/* {isOpen && <div className='accordion-item__content'>{item.text}} */}
    </div>
  )
}