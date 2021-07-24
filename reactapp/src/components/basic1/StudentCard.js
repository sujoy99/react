import React from 'react'

const StudentCard = ({ studentData }) => {
	console.log("this is studentCard:");
	console.log(studentData);
	return (


		<>

			{
				studentData.map((curElem) => {

					const { id, name, dept, add, image } = curElem;

					return (
						<>

							<div className="col-4" key={id}>
								<div className="card border-success m-2" style={{ borderLeft: '5px solid black' }}>

									<img class="card-img-top" src={image} alt="" height="180" />
									<div class="card-body">
										<p class="card-text">Name : {name}</p>
										<p class="card-text">Dept : {dept}</p>
										<p class="card-text">Address : {add}</p>
									</div>

								</div>
							</div>

						</>
					)

				})
			}




		</>
	)
}

export default StudentCard;
