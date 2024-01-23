
type HelloProps={
    name:string;
    messageCount?:number  //Optional
    isLoggedIn:boolean

    fullName:{  //Object
        first:string;
        last:string
    }

    names:{    //list
        first:string;
        last:string
    }[]

    status:'loading'|'success'|'error'
}

export const Hello = (props:HelloProps) =>
{
    let message;
                
    if (props.status ==='loading') {
        message = 'Loading.....'
    }
    else if (props.status === 'success') {
        message = 'Data fetched successfully !!!'
    }
    else if (props.status === 'error') {
        message = 'Error fetching data'
    }

    const {messageCount = 0 } = props

    return(
        <>
            <h1>
                {
                    props.isLoggedIn ? `Welcome !!! ${props.name} You have ${messageCount} messages` : 'Welcome.....'
                }               
            </h1>
            <div>
                {props.fullName.first} {props.fullName.last}
            </div>
            <div>
                {props.names.map((name1)=>
                {
                    return(
                        <h2>
                            {name1.first} {name1.last}
                        </h2>
                    )
                })}
            </div>

            <h2>Status - {message}</h2>
        </>
    )
}