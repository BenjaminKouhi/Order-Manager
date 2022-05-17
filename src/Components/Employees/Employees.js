import React, { useContext, useState } from 'react';
import Style from './Style/Employees.module.css';

import { employeesDataContext } from '../../Store/Context/Employees/employees-context';
import Employee from './Employee/Employee';
import NewEmployee from './NewEmployee/NewEmployee';

const Employees = () => {
    const employeesData = useContext(employeesDataContext);
    const [isShown, setIsShown] = useState(false);

    return (
        <div>
            <h1>Employees</h1>
            <div className={Style.Employees}>
                {employeesData.data.map(element => 
                    <Employee key={element.id} 
                    id={element.id} 
                    firstName={element.first_name} 
                    lastName={element.last_name}
                    newEmployee={employeesData.dataChangeHandler} />
                )}
            </div>
            <div className={Style.add} onClick={() => {setIsShown(true)}}>+</div>
            {isShown && <NewEmployee
                employeesData={employeesData.data} 
                newEmployee={employeesData.dataChangeHandler}
                setIsShown={setIsShown} 
            />}
        </div>
    );
};

export default Employees;