import { createContext, useState } from "react";

/*
    Craete context requires 3 Simple Steps::
    1. Creating the Context  //In app component
    2. Providing the Context
    3. Consuming the Context
*/

// Creating Context
interface ContextProps {
    isLoggedIn: boolean;
  }
  
export const LoginContext = createContext<ContextProps | undefined>(undefined);

interface LoginContextProviderProps 
{
    children:React.ReactNode;
}

const LoginContextProvider: React.FC<LoginContextProviderProps> = ({ children }) => {

    const  [userDetail] = useState(false);
    return(
        <LoginContext.Provider value={{isLoggedIn:userDetail}}>
            <div>
                {children}
            </div>
        </LoginContext.Provider>
    )
}
export default LoginContextProvider;