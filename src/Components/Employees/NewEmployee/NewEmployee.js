import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Style from './Style/NewEmployee.module.css';

const NewEmployee = ({employeesData, newEmployee, setIsShown}) => {
    const [newEmployeeData, setNewEmployeeData] = useState({
        lastName: "",
        firstName: "",
    })

    const Changehandler = event => {
        setNewEmployeeData({
            ...newEmployeeData,
            [event.target.name]: event.target.value,
        })
    }

    const addNewEmployee = () => {
        if(newEmployeeData.firstName && newEmployeeData.lastName) {
            newEmployee("ADD", "", newEmployeeData.firstName, newEmployeeData.lastName)
            setIsShown(false)
            console.log(employeesData);
        }
    }

    return ReactDOM.createPortal(
        <div>
            <div className={Style.overlay}>
                <div className={Style.Modal}>
                    <div className={Style.Detail}>Add a new Employee</div>
                    <div className={Style.Container}>
                        <div>
                            <input name='lastName' value={newEmployeeData.lastName} onChange={Changehandler} placeholder="Last Name" />
                        </div>
                        <div>
                            <input name='firstName' value={newEmployeeData.firstName} onChange={Changehandler} placeholder="First Name" />
                        </div>
                        <button onClick={addNewEmployee}>+</button> 
                    </div>
                    
                    <div onClick={() => {setIsShown(false)}} className={Style.x}>X</div>
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default NewEmployee;