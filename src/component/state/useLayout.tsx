
//use case of useLayoutEffect is to get the dimension of the layout

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffectComponent = () =>{

    const [toggle,setToggle] = useState(false);
    const textRef = useRef<HTMLHeadElement>(null);
    useLayoutEffect(()=>{
        if(textRef.current != null)
        {
            const dimension = textRef.current.getBoundingClientRect();
            console.log(dimension)
            textRef.current.style.paddingTop=`${dimension.height}px`
        }
    },[toggle])

    // useLayoutEffect(()=>{
    //     console.log('useLayoutEffect')
    // })
    return(
        <div>
            <button onClick={()=>setToggle(!toggle)}>Toggle</button>
            {toggle && <h4>Code Bless you</h4>}
        </div>
    )
}
export default UseLayoutEffectComponent;