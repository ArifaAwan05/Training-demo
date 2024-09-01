import { useState, useRef , useEffect} from "react";


export default function HookPractice(){

    const[myData, setMyData] = useState("");
    // const[count, setCount] =useState(0);

    const refElement = useRef(0);
    console.log(`th file uses, useRef count: ${refElement}`);
    

    useEffect(()=>{
       refElement.current = refElement.current+1;
    })

    return(<div>
        <h1> Counter</h1>
        <input type="text"
        value={myData}
        onChange={(e)=>{setMyData(e.target.value)}}/>

        <p> the number od re-render: {refElement.current}</p>
    </div>)
}