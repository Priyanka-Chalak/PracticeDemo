import React from "react"

type ButtonProps = {
    handleClick:() => void
    handleClick1:(event:React.MouseEvent<HTMLButtonElement>,id:number) => void
}

export const Button =(props:ButtonProps)=>
{
    return <>
        <button onClick={props.handleClick}>Click</button>
        <button onClick={(event) => props.handleClick1(event,2)}>Click Me</button>
    </>
}