import React, {useState, useEffect} from "react";
import {employeeList,  employeeUnderManager} from "../Service/Api"

const AllEmployeesUnderManager = ()=> {
    const [completeEmpList, setCompleteEmpList] = useState([]);
    const [currEmp, setCurrEmp] = useState(0);
    const [actualEmpList, setActualEmpList] = useState([]);

    const fetchEmployees = async ()=> {
        const res = await employeeList();
        setCompleteEmpList(res.data.data);
    }

    const handleSubmit = async ()=> {
        const res = await employeeUnderManager(currEmp);
        setActualEmpList(res.data.data);
    }
        
    useEffect(()=> {
        fetchEmployees();
    },[])

    return(
        <>
        <h2>List Of Employees By Manager</h2>
        <h3>Select Manager</h3>
        <select onChange = {(e)=> {setCurrEmp(e.target.value)}}>
            <option value = "0">Select Manager</option>
            {completeEmpList.map((emp)=> {
                return(<option key = {emp.empId} value = {emp.empId}>{emp.empName}</option>)
            })}
        </select>
        <button onClick = {handleSubmit} disabled = {currEmp === 0}>Search</button>
        <h3>List of Employees</h3>
        {actualEmpList.length > 0 ? (
         actualEmpList.map((emp) => (
         <div key={emp.empId}>{emp.empName}</div>
         ))
         ) : (<div>No Employees</div>)}
        </>
    )
}

export default AllEmployeesUnderManager;