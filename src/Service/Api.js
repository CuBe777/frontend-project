import axios from "axios";

export const API = axios.create({baseURL: "http://localhost:8080"});
export const addEmp = (data) => API.post("/employee/create", data);
export const addDep = (data) => API.post("/department/create", data);
export const moveEmp = (id, newDeptId) => API.put(`/employee/move/${id}?deptId=${newDeptId}`);
//export const changeHead = (id, data) => API.post(`/deparment/head/${id}`, data);
export const employeeList = () => API.get("/employee/getall");
export const departmentList = () => API.get("/department/getall");
export const employeeListInDep = (id) => API.get(`/employee/getByDepartment/${id}`)
export const employeeUnderManager = (id) => API.get(`/employee/getByManager?empId=${id}`)