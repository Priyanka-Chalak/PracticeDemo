import { useContext } from "react";
import { LoginContext } from "./LoginContextProvider";

const SingleComponent = ()=>{
    const login = useContext(LoginContext);
    console.log(login)
    return(
        <div>
            <h3>Single Component</h3>
        </div>
    )
}

export default SingleComponent;