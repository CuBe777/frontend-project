import React, {useState, useEffect} from "react";
import {departmentList} from "../Service/Api"

const ViewAllDepartments = ()=> {
    const [depList, setDepList] = useState([]);

    const fetchDepartments = async ()=> {
        const res = await departmentList();
        setDepList(res.data.data); 
    }

    useEffect(()=> {
        fetchDepartments();
    },[])
    
    return (
        <>
        <h2>Department List</h2>
        {depList.map((dep)=> {
            return(<div key = {dep.deptId}  value = {dep.deptId}>{dep.depName}</div>)
        })}
        </>
    )
}

export default ViewAllDepartments;