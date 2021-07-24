import React, { useState } from 'react'
import StudentCard from "./StudentCard";
import Navbar from "./Navbar";
import Student from "./sutdentApi";


const uniqueList = [...new Set(Student.map((curElem) => {
	return curElem.dept;
})), 'All'


];

const Varsity = () => {



	const [studentData, setstudentData] = useState(Student);
	console.log("this is varsity");
	console.log(studentData);
	console.log(uniqueList);

	const filterItem = (dept)=>{

		console.log("this is filter item:");
		// alert(dept);

		if(dept === 'All'){
			setstudentData(Student);
			return ;
		}

		const updatedList = Student.filter( (curElem) => {
				return curElem.dept === dept;
		})

		setstudentData(updatedList);

		console.log(updatedList);
	}


	return (
		<>

			<div className="container shadow-lg p-4 rounded">
				<div className="row">

					<Navbar uniqueList={uniqueList} filterItem={filterItem} />

					<StudentCard studentData={studentData} />



				</div>
			</div>

		</>
	)
}

export default Varsity
