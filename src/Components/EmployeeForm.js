import React, {useState, useEffect} from "react";
import {addEmp, departmentList,employeeListInDep} from "../Service/Api";

const EmployeeForm = ()=> {
    const [name, setName] = useState("");
    const [currDep, setCurrDep] = useState(0);
    const [manager, setManager] = useState(0);
    const [depList, setDepList] = useState([]);
    const [empList, setEmpList] = useState([]);

    const fetchDepartments = async ()=> {
        const res = await departmentList();
        setDepList(res.data.data); 
    }

    const fetchEmployees = async()=> {
        const res = await employeeListInDep(currDep);
        console.log(res);
        setEmpList(res.data.data);
    }
    
    useEffect(()=> {
        fetchDepartments();
    },[])


    const handleSubmit = async ()=> {
        try{
            await addEmp({empName: name, departmentId: currDep, managerId: manager});
            alert("Employee added successful");
        } catch {
            alert("Employee addition incomplete");
        }
    }

    return(
        <>
        <h2>Employee Form</h2>
        <h3>Input Name</h3>
         <input onChange ={(e)=>{setName(e.target.value)}} />

         <h3>Select Department</h3>
         <select onChange = {(e)=> {setCurrDep(e.target.value)}}>
            <option value = "0">Select Department</option>
            {depList.map((dep)=> {
                return(<option key={dep.deptId} value = {dep.deptId}>{dep.depName}</option>)
            })}
         </select>
         <button onClick = {fetchEmployees} disabled = {currDep === 0 ? true: false}>Search</button>

         <h3>Select Manager</h3>
         <select onChange = {(e)=> {setManager(e.target.value)}}>
            <option value = "0">Select Manager</option>
            {empList.map((emp)=> {
                return(<option key={emp.empId} value = {emp.empId}>{emp.empName}</option>)
            })}
         </select>

         <br/>
         <button onClick = {handleSubmit} disabled = {name === "" || currDep === 0 || manager === 0} >Submit</button>
        </>
    );
}

export default EmployeeForm;