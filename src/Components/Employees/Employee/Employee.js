import React from 'react';
import Style from './Style/Employee.module.css';

const Employee = ({id, firstName, lastName, newEmployee}) => {
    const deleteHandler = () => {
        newEmployee("DELETE", id, "", "")
    }
    
    return (
        <div className={Style.Container}>
            <div>{id}.</div>
            <div className={Style.Name}>
                <div className={Style.last}>{lastName}</div> -
                <div className={Style.first}>{firstName}</div>
            </div>
            <div className={Style.X} onClick={deleteHandler}>X</div>
        </div>
    );
};

export default Employee;