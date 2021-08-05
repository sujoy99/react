import React from 'react'



const EmployeeCard = ({ empData }) => {
    console.log("this is emp card")
    console.log(empData);

  
    return (
        <>
            {

                empData.map((curElem) => {

                    const {name, dept, add} = curElem;

                    return (
                        <>
                            <div className="card card-body shadow-md rounded-top col-3 m-2" key={name}>
                                <span>Name : {name}</span>
                                <span>Dept : {dept}</span>
                                <span>Add : {add}</span>
                            </div>
                        </>
                    )
                    

                })
            }
        </>
    )
}
export default EmployeeCard;
