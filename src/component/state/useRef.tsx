import { useRef } from 'react'

const UseRefComponent = () =>{
    //first use case 
  /*  const [name, setName] = useState("");
    //this function returns an object with one property that is current and it is stored in count variable
    const count = useRef(0);
    console.log(count);

    //first use case of useRef is to create a mutable variable without causing re-render
    //When we type in input box count will update by 1  
    useEffect(()=>{
        count.current = count.current + 1;
    }); */

    // for solving this problem we use useRef
    /* const [count, setCount] = useState(0);
        useEffect(()=>{
        setCount((prev)=>prev+1)
    }); */


    // second use case of useRef
    // which is accessing the DOM element
    // in react we can add ref attribute to element for access it directly
    const inputElement = useRef<HTMLInputElement>(null);
    const handleClick = () =>{

        if(inputElement.current)
        {
            console.log(inputElement.current);
            inputElement.current.style.width = "350px";
            inputElement.current.focus();
        }
    } 
    return(
        <div>
            {/* <h2>Renders:{count}</h2> */}
 
            {/*
             <input type='text' onChange={(e)=>setName(e.target.value)}></input>
            <h2>Name:{name}</h2>
            <h2>Renders : {count.current}</h2> */}


            <input type='text' ref={inputElement}/>
            <button onClick={handleClick}>Click Here</button>
           </div>

    )
}
export default UseRefComponent;