import React, {useState, useEffect} from "react";
import {employeeList,departmentList, moveEmp} from "../Service/Api"

const MoveEmployee = ()=> {
    const [empList, setEmpList] = useState([]);
    const [depList, setDepList] = useState([]);
    const [empId, setEmpId] = useState(0);
    const [newDeptId, setNewDeptId] = useState(0);

    const fetchEmployees = async ()=> {
        const res = await employeeList();
        setEmpList(res.data.data); 
    }

    const fetchDepartments = async ()=> {
        const res = await departmentList();
        setDepList(res.data.data); 
    }

    useEffect(()=> {
        fetchEmployees();
        fetchDepartments();
    },[])

    const handleSubmit = async() => {
        try {
            await moveEmp(empId, newDeptId);
            alert("Employee moved successfully")
        } catch {
            alert ("Employee move incomplete");
        }
    }

    return (
        <>
        <h2>Change Employee Department</h2>
        <select onChange = {(e)=> {setEmpId(e.target.value)}}>
            <option value = "0">Select Employee</option>
            {empList.map((emp)=> {
                return(<option key = {emp.empId} value = {emp.empId}>{emp.empName}</option>)
            })}
        </select>

        <select onChange = {(e)=> {setNewDeptId(e.target.value)}}>
            <option value = "0">Select Department</option>
            {depList.map((dep)=> {
                return(<option key = {dep.deptId} value = {dep.deptId}>{dep.depName}</option>)
            })}
        </select>
        <button onClick = {handleSubmit} disabled = {empId === 0 || newDeptId === 0}>Submit</button>
        </>
    );
}

export default MoveEmployee;