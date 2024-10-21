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
  const handleOpen= (id) => {
    setOpen(id===open? null:id );
  };
  return (
    <div className='accordion'>
        {
          data.map(item => (
           <AccordionItem 
           key={item.id} 
           id={item.id}
           title={item.title}
           onOpen={handleOpen}  
           open={open}>
              {item.text}
           </AccordionItem>
          ))
        }

            <AccordionItem 
            id={4}
            title="another accordion"
            onOpen={handleOpen}  
            open={open}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda exercitationem est ex illum. Commodi at incidunt mollitia labore sit optio modi delectus perferendis, error exercitationem veritatis sequi eum voluptate!
              </p>
              <ul>
                <li>one</li>
                <li>two</li>
              </ul>
              <a href="#">Hi</a>
            </AccordionItem>
    </div>
  )
}

export default Accordion;

function AccordionItem({id,title, open, onOpen,children}){
  // const [isOpen,setIsOpen]= useState(false);
  const isOpen = id === open;
  return(
    <div className= {`accordion-item ${isOpen ? "accordion__expanded": ""}`} >
      <div className='accordion-item__header' 
      // onClick={() => setOpen(item.id)}
      onClick={() => onOpen(id)}
      >
        <div>{title}</div>
        <ChevronDownIcon className="accordion-item__chevron"
        // style={{
        //   width:"1.2rem", 
        //   transition:"all 0.2s ease-out",
        //   rotate:isOpen? "180deg":"0deg",
        //   }}
           />
      </div>
      <div className='accordion-item__content'>{children}</div>
      {/* {isOpen && <div className='accordion-item__content'>{item.text}} */}
    </div>
  )
}