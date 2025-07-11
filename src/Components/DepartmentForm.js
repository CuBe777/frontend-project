import React, {useState} from "react";
import {addDep} from "../Service/Api"

const DepartmentForm = ()=> {
    const [depName, setDepName] = useState("");

    const handleSubmit = async ()=> {
        try{
            await addDep({depName: depName});
            alert("Department added successfully");
        } catch {
            alert("Deparment addition incomplete");
        }
    }

    return (
        <>
        <h2>Add Department</h2>
        <input onChange = {(e)=> {setDepName(e.target.value)}}/>
        <button onClick = {handleSubmit}>Submit</button>
        </>
    );

}

export default DepartmentForm;