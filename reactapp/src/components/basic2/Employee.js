import React, {useState} from 'react'
import EmployeeCard from "./EmployeeCard";
import Navbar from "./Navbar";
import emp from "./employeeApi";

const uniqueList =  [ ...new Set (
    emp.map((curElem)=>{return curElem.dept})
), 'All']

console.log(uniqueList);





const Employee = () => {

    const [empData, setempData] = useState(emp);
    console.log("this is emp:");
    console.log(empData);

    const filterList = (data)=>{
        console.log("this is data")
        console.log(data)

        if(data === 'All'){
            setempData(emp)
            return;
        }

        const filterData = emp.filter( (curElem)=>{
            console.log(curElem)
            return data === curElem.dept;
        })

        console.log(filterData)
        setempData(filterData)
   
    }



    return (
        <>
            <div className="container">

                <div className="row p-4">
                    <ul>
                    
                    <Navbar uniqueList={uniqueList} filterList={filterList}/>

                        
                    </ul>
                </div>
                <div className="row p-4">
                
                    <EmployeeCard empData={empData} />

                </div>
            </div>
           
        </>
    )
}

export default Employee
