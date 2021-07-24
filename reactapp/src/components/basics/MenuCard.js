import React from 'react'

const MenuCard = ({ menuData }) => {
	console.log("This is from menuCard :")
	console.log(menuData);
	return (

		<>

			<div className="row">
				{
					
					menuData.map((curElem) => {

						const {id, name, category, price, description, image} = curElem;

						return (


							<>
								<div className="card-container col-6 " key={id} >
									<div className="card shadow">
										<div className="card-body mt-2">
											<span className="card-number card-circle subtle d-inline p-2 rounded-circle bg-dark text-warning">{id}</span>
											<span className="card-author subtle d-block">{category}</span>

											<h2 className="card-title">{name}</h2>

											<span className="card-description subtle">
											{description}
																			</span>

																			<h5 className="card-description subtle">
											Price : {price}
																			</h5>

											<div className="card-read btn btn-secondary">Read</div>

										</div>

										<img src={image} alt="" className="card-media" height="80" width="80"/>
										<span className="card-tag subtle btn btn-success">Order Now </span>
									</div>
								</div>

							</>

						)
					})
				}

			</div>
		</>

	)
}

export default MenuCard
