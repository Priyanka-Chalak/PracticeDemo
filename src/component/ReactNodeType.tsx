type ReactNodeProps ={
    children:React.ReactNode
}

export const ChildComponent = (props:ReactNodeProps) =>
{
    return <div>
        {props.children}
    </div>
}