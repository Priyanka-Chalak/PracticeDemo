import { useReducer } from "react";

interface State {
    count:number
}

interface Action {
    type:'Increment' | 'Decrement'
}

const initialState : State = {count : 0}
 
const reducer = (state:State, action:Action):State =>{
    console.log(action)
    switch(action.type)
    {
        case 'Increment':
            return {count: state.count+1}
        case 'Decrement':
            return {count: state.count-1}
        default:
            return state
    }    
};
 const UseReducderComponent = () =>{
    
    
    const [state, dispatch] = useReducer(reducer,initialState)

    const increaseCount = () => {
        dispatch({type:'Increment'});
    };

    const decreaseCount = () =>{
        dispatch({type:'Decrement'});
    }
    return(
        <div>
            <h2>Use Reducer Hook Count :: {state.count} </h2>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    )
 }
 export default UseReducderComponent;