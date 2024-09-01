import { useState, useRef } from "react";

export default function RefHook(){
     //how to use Ref ==> hook that directly Manipulate DOM, bcz we cant do with useState
    const refElement = useRef("");
    const[name, setName] = useState("Arifa")
    console.log(refElement);

    function Reset(){
        setName("");
        refElement.current.focus();

    }

    function handleInput(){
        refElement.current.style.color ="Blue";
        refElement.current.value="Awan";

    }

 return(<div>
        <h1>this is about Ref Hook </h1>
        <input type="text" ref={refElement}
         value={name} 
        onChange={(e)=> setName(e.target.value) } 
        placeholder="Enter a text"/>
       <button onClick={Reset}>Reset</button>
       <button onClick={handleInput}>Change Color</button>
        </div>
    );
}