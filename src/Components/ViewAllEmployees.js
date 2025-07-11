import React, {useState, useEffect} from "react";
import {employeeList} from "../Service/Api"

const ViewAllEmployees = ()=> {
    const [empList, setEmpList] = useState([]);
    
    const fetchEmployees = async ()=> {
        const res = await employeeList();
        setEmpList(res.data.data);
    }
    
    useEffect(()=> {
        fetchEmployees();
    },[])

    return (
        <>
        <h2>Employee List</h2>
        {empList.map((emp)=> {
            return(<div key = {emp.empId}>{emp.empName}</div>)
        })}
        </>
    )
}

export default ViewAllEmployees;