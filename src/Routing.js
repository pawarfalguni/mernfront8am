import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StudentData from './student/StudentData'
import AddStudent from './student/AddStudent'
import StudentOperation from './student/StudentOperation'
import EditStudent from './student/EditStudent'
import EmployeeData from './employee/EmployeeData'
import AddEmployee from './employee/AddEmployee'
import EmployeeOperation from './employee/EmployeeOperation'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StudentData/>}/>
        <Route path='/addstudent' element={<AddStudent/>}/>
        <Route path='/studentoperation' element={<StudentOperation/>}/>
        <Route path='/editstudent/:id' element={<EditStudent/>}/>
        <Route path='/employeedata' element={<EmployeeData/>}/>
        <Route path='/addemployee' element={<AddEmployee/>}/>
        <Route path='/employeeoperation' element={<EmployeeOperation/>}/>
       
      </Routes>
    </div>
  )
}

export default Routing
