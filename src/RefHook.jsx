import { useRef } from "react";

export default function RefHook(){
     //how to use Ref ==> hook that directly Manipulate DOM, bcz we cant do with useState
    const refElement = useRef();
    console.log(refElement)
   
    return(<div>
        <h1>this is about Ref Hook </h1>

        </div>
    );
}