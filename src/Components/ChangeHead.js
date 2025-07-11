import React, {useState, useEffect} from "react";
import {changeHead, API} from "../Service/Api"

const ChangeHead = ()=> {
    const [employeeList, setEmployeeList] = useState([]);
    const [depList, setDepList] = useState([]);
    const [headId, setHeadId] = useState(0);
    const [deptId, setDeptId] = useState(0);

    const fetchEmployees = async ()=> {
        const res = await API.get("/employees");
        setEmployeeList(res.data.data); 
    }

    const fetchDepartments = async ()=> {
        const res = await API.get("/departments");
        setDepList(res.data.data); 
    }

    useEffect(()=> {
        fetchDepartments();
        fetchEmployees();
    },[])

    const handleSubmit = async() => {
        try {
            await changeHead(deptId, {empId: headId});
            alert("Deparment Head Changed successfully")
        } catch {
            alert ("Department Head Change incomplete");
        }
    }

    return (
        <>
        <h2>Change Department Head</h2>
        <select onChange = {(e)=> {setDeptId(e.target.value)}}>
            <option value = "">Select Department</option>
            {depList.map((dep)=> {
                <option key = {dep.id} value = {dep.id}>{dep.name}</option>
            })}
        </select>

        <select onChange = {(e)=> {setHeadId(e.target.value)}}>
            <option value = "">Select Head</option>
            {employeeList.map((emp)=> {
                <option key = {emp.id} value = {emp.id}>{emp.name}</option>
            })}
        </select>
        <button onClick = {handleSubmit}>Submit</button>
        </>
    );
}

export default ChangeHead;