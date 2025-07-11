import React, {useState, useEffect} from "react";
import {departmentList, employeeListInDep} from "../Service/Api";

const AllEmployeesInDep = ()=> {
    const [depList, setDepList] = useState([]);
    const [currDep, setCurrDep] = useState(0);
    const [empList, setEmpList] = useState([]);
    
    const fetchDepartments = async ()=> {
        const res = await departmentList();
        setDepList(res.data.data);
    }

    const fetchEmployees = async()=> {
        const res = await employeeListInDep(currDep);
        setEmpList(res.data.data);
    }
    
    useEffect(()=> {
        fetchDepartments();
    },[])

    return(
        <>
        <h2>List Of Employees By Department</h2>
        <select onChange = {(e)=> {setCurrDep(e.target.value)}}>
            <option value = "0">Select Department</option>
            {depList.map((dep)=> {
                return(<option key={dep.deptId} value = {dep.deptId}>{dep.depName}</option>)
            })}
        </select>
        <button onClick = {fetchEmployees} disabled = {currDep === 0 ? true: false}>Search</button>

        <h2>List of Employees</h2>
        {empList.map((emp)=> {
            return(<div key = {emp.empId}>{emp.empName}</div>)
        })}
        </>
    )
}

export default AllEmployeesInDep;