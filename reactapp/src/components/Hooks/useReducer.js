import React, {useReducer, useEffect} from 'react'

const reducer = (state, action)=>{

    if(action.type === "INCR"){
        state = state + 1;
    }

    if(state > 0 &&  action.type === "DECR"){
        state = state - 1;
    }

    return state;

}

const UseReducer = () => {

    const initialData = 5;
    const [state, dispatch] = useReducer(reducer, initialData)

    useEffect(() => {
        document.title = `Chat(${state})`;
    })


    return (
        <>
        <p>{state}</p>
        <button onClick={ ()=>{ dispatch({type:"INCR"}) } } >Incr</button>
        <button onClick={ ()=>{ dispatch({type : "DECR"}) }} >Decr</button>
            
        </>
    )
}

export default UseReducer
