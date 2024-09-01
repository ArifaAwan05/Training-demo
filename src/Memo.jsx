import { useMemo, useState } from "react";

export default function Memo(){
    const[add, setAdd] =useState(0);
    const[minus, setMinus] =useState(100);


    const mul= useMemo(function multiply(){
        console.log("***Multiply************");
        return add*10;
    }, [add]);
return(
        <div>
            <p>{mul}</p>
            <p>Addition is : {add}</p>
            <button onClick={(e)=> setAdd(add+1)}>Addition</button>
            <br>
            </br>
            <p>Minusis : {minus}</p>
            <button onClick={(e)=> setMinus(minus-1)}>Subtraction</button>
            <br>
            </br>

        </div>
    )
}