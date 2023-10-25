import React from "react";
import cookingImg from "../images/cooking.png";
import { useDrag } from "react-dnd";

export default function Drag(props)
{

    const [{isDragging}, drag] = useDrag(()=> ({
         type: "li",
         item: {id: props.id},
         collect: (monitor) =>({
             isDragging:!! monitor.isDragging(),
         }),
    }))

    return(
        <li key={props.id} className="fillchoice--li" ref={drag} style={{border: isDragging? "2px solid red": "0px"}}>
        <img src={cookingImg} alt="course-img" />
        <span>{props.name}</span>
      </li>
    )
}