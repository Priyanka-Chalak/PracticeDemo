import { useMemo, useState } from "react";

//useMemo Hook is used to improve performance of our react application
//we can stop running unwanted functions on re-rendering
//we perform all side effects in useEffect hook
//all expensive functions,calculation in useMemo Hook

const UseMemoComponent = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    function expensivFunction(num:number){
        console.log("Loop Started");
        for(let i=0;i<1000000;i++)
        {
           
        }
        return num;
    }

    const memoCalculation = useMemo(()=>{
        return expensivFunction(number)
    },[number]);
    
    // const calculation = expensivFunction(number);
    const cssStyle = {
        backgroundColor:dark ? "black":"white",
        color:dark ? "white":"black",
    }

    return(
        <div style={cssStyle}>
            <input onChange={(e)=> setNumber(e.target.valueAsNumber)}
            type='number'
            value={number}></input>
            <h2>Calcultion in useMemoHook : {memoCalculation}</h2>
            <button onClick={()=> setDark(!dark)}>Toggle</button>
        </div>
    )
}
export default UseMemoComponent;