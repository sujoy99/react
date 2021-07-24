import React from 'react'

const Navbar = ({uniqueList, filterItem}) => {
	return (
		<>
			<div className="col-12 text-center">
				<div class="btn-group" role="group" aria-label="Basic example">


					{
						uniqueList.map( (curELem)=>{
							
							return (
								<>
									<button type="button" class="btn btn-secondary" onClick={ () => {return filterItem(curELem)} } >{curELem}</button>
								</>
							)
						})
					}


				</div>
			</div>
		</>
	)
}

export default Navbar
