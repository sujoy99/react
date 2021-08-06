import React, {useState, useEffect} from 'react'

const UseEffect = () => {

    const initialData = 0;
    const [myNum, setmyNum] = useState(initialData)

    useEffect(() => {
        
        document.title = `Chat(${myNum})`;
    } )



    return (
        <>
            <button onClick={ () => { setmyNum( myNum + 1 ) } } >Incr</button>
            <button onClick={ ()=> {  myNum > 0 ? setmyNum( myNum - 1 ) : setmyNum( 0 ) } } >Decr</button>
        </>
    )
}

export default UseEffect
