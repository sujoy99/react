import React from 'react'

const PlayerCard = ({playerData}) => {
    return (
        <>

{
                playerData.map( (curElem) => {

                    const {name, position, country, image} = curElem

                    return (
                        <>
                            
                        <div className="col-4 mb-2" key={name}>
                                  <div className="card rounded shadow-lg">
                                      <img src={image} alt="" height="60" width="60"/>
                                      <span>Name : {name}</span>
                                      <span>Position : {position}</span>
                                      <span>Country : {country}</span>
                                  </div>
                              </div>
                            
                        </>
                    )

                } )
            }
            
        </>
    )
}

export default PlayerCard
