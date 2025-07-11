import './App.css';
import EmployeeForm from './Components/EmployeeForm';
import DepartmentForm from './Components/DepartmentForm';
import MoveEmployee from './Components/MoveEmployee';
import ViewAllEmployees from './Components/ViewAllEmployees';
import ViewAllDepartments from './Components/ViewAllDepartments';
import AllEmployeesInDep from  './Components/AllEmployeesInDep';
import AllEmployeesUnderManager from './Components/AllEmployeesUnderManager';

import {useState} from "react";

function App() {
  const [activeComponent, setActiveComponent] = useState("Employee Form");

  const renderComponent = ()=> {
    switch(activeComponent) {
      case "Employee Form":
        return <EmployeeForm/>
      case "Department Form":
        return <DepartmentForm/>
      case "Move Employee":
        return <MoveEmployee/>
      case "View All Employees":
        return <ViewAllEmployees/>
      case "View All Departments":
        return <ViewAllDepartments/>
      case "Employees of a Department":
        return <AllEmployeesInDep/>
      case "View Employees under a Manager":
        return <AllEmployeesUnderManager/>
    }
  }

  return (
    <>
     <h1>Employee Structure Management</h1>
     <button onClick = {()=> {setActiveComponent("Employee Form")}}>Employee Form</button>
     <button onClick = {()=> {setActiveComponent("Department Form")}}>Department Form</button>
     <button onClick = {()=> {setActiveComponent("Move Employee")}}> Change Employee Department</button>
     <button onClick = {()=> {setActiveComponent("View All Employees")}}> View All Employees</button> 
     <button onClick = {()=> {setActiveComponent("View All Departments")}}> View All Departments</button>
     <button onClick = {()=> {setActiveComponent("Employees of a Department")}}> Employees of a Department</button>
     <button onClick = {()=> {setActiveComponent("View Employees under a Manager")}}> View Employees under a Manager</button>
     <div>
      {renderComponent()}
     </div>
    </>
  );
}

export default App;
