import { time } from "console";
import { useEffect, useState } from "react"

const Count =()=>
{
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("");
    
    function increaseCounter () {
        setCounter(counter+1);
    }

    //useEffect without dependencies
    //when we use useEffect Hook without any dependencies useEffect will run on every single Component  
    // useEffect(()=> {
    //     document.title = `${counter} new messages!!!`;
    // });

    /* useEffect with an empty array
        when we pass an empty array in dependencies useEffect will run only one time when our component 
        get render first time and after that useEffect will never run it's useful when we use to fetch data
        from api or server and that will fetch data when component get renders first time 
    */
    // useEffect(()=> {
    //     document.title=`${counter} new messages!!!`;
    // },[]);

    /* useEffect Hook with variables
        
    
    */
   const [otherCount, setOtherCount] = useState(5);
   useEffect(()=> {
    document.title=`${otherCount} new message!!`;
   },[otherCount]);

   //Clean-up function in useEffect for using cleanup function we need to use return function in useEffect
   const [time,setTime] = useState(0);
//    useEffect(()=>{
//     const timer = setInterval(()=>{
//         setTime(time + 1);
//         console.log('Run useEffect ',counter);
//     }, 9000);
//     return ()=>
//     {
//         clearInterval(timer)
//         console.log('Clean up ',counter)
//     }
//    });

useEffect(()=>{
        console.log('Run useEffect ',counter);

    return ()=>
    {
        console.log('Clean up ',counter)
    }
   },[counter]);

    return(
        <div>
            <input type="text" onChange={e => setName(e.target.value)}/>
            <h1>{name} has clicked {counter} times for useStateHook </h1>
            <button onClick={increaseCounter}>Increase</button>

            <h3>Other Count for UseEffect Hook :{otherCount}</h3>
            <button onClick={()=>setOtherCount(otherCount + 5)}>
                Increase by 5
            </button>

            {/* <div>
                <h3>{time} in seconds</h3>
            </div> */}
        </div>
    )
}

export default Count;