import React from 'react'
const myStyle = {border: 'none', backgroundColor: 'red' }

const Navbar = ({uniqueList, filterList}) => {
    return (
        <>
        {
            uniqueList.map((curElem)=>{

                return (
                    <li><button style={myStyle} onClick={ () => {filterList(curElem)} }>{curElem}</button></li>
                )
            })
        }
             
        </>
    )
}

export default Navbar
