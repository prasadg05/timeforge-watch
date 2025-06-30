import React, {useState }  from "react";

const UseExcet =()=>{
    const [num, setNum] =useState(2);

    return(
       <button
       onClick={(()=> {
        setNum(num+1);
       },
       ()=> {
        alert("I am Clicked");
       })
       }
       >Click Me {num}</button>
       );
    };
export default UseExcet;