import React from 'react'

const Navbar = ({playerCountry, filterPlayer}) => {
    return (
        <>

            {
                    playerCountry.map( (curElem) => {

                    return (
                        <>
                            <button type="button" class="btn btn-primary" onClick={ () => {
                                filterPlayer(curElem)
                            }} >
                                { curElem }</button>
                        </>
                    )
                } )
            }
            
        </>
    )
}

export default Navbar
