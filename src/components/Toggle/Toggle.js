import { useState } from "react";

export default function Toogle(){
    const[ text, setText]=useState("Hello");

    return (
        <div style={{padding:50}}>
<button 
        onClick={()=>{
            setText(!text);
        }}>
         Click On Me!!   
        </button>
        
        <h1 >
        {text ? "Hello" : ""}
        </h1>
        
        
        
        </div>
        
    );
    
}
