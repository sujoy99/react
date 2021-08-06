import React, {useState} from 'react'

const UseState = () => {

    const initialData = 5;
    const [myNum, setState] = useState(initialData)


    return (
        <>
            <p>{myNum}</p>
            <button onClick={ ()=>{ setState( myNum + 1 ) } }>Incr</button>
            <button onClick={ ()=> { myNum>0 ?  setState( myNum - 1) : setState(0) } } >Decr</button>
        </>
    )
}

export default UseState
