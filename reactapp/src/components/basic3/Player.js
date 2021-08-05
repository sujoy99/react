import React, {useState} from 'react'
import player from "./playerApi";
import PlayerCard from "./PlayerCard";
import Navbar from "./Navbar";

const Player = () => {

    const [playerData, setplayerData] = useState(player)

    const playerCountry =  [...new Set( 
        player.map( (curElem) => {
                return curElem.short;
        })
     ), "All"];

    
    const filterPlayer = (data) => {

        console.log("data")
        console.log(data)

        if(data === 'All') return setplayerData(player);
        
       const filterData = player.filter( (curElem) => {
            return (curElem.short === data)
        } )

        setplayerData(filterData)
        console.log(filterData)
    }


    console.log("this is Player from player.js")
    console.log(playerData)
    console.log(playerCountry)
    

    return (
        <>
          <div className="container">
              <div className="row">
                  <div className="col-12 m-4 d-flex justify-content-center">
                  <div class="btn-group">

                        {/* navbar starts  */}
                        <Navbar playerCountry={playerCountry} filterPlayer={filterPlayer}/>

                    </div>
                  </div>

                {/* playercard starts  */}
                <PlayerCard playerData={playerData}  />


                  
              </div>
          </div>
        </>
    )
}

export default Player
