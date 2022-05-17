import React, { useState } from 'react';

import Data from '../../DATA/EMPLOYEES_DATA.json'

import { employeesDataContext } from './employees-context';

const EmployeesContext = ({ children }) => {
    const [newData, setNewData] = useState(Data);

    const dataChangeHandler = (action, id, firstName, lastName) => {
        setNewData(employeesData.data)
        if(action === "ADD") {
            employeesData.data.push({
                "id":employeesData.data.length + 1,
                "first_name": firstName,
                "last_name": lastName
            })
        } else if(action === "DELETE") {
            employeesData.data.splice(id - 1, 1);
            const newEmployeesData = employeesData.data.map(element => {
                if(element.id > id) {
                    return{
                        ...element,
                        id: element.id - 1,
                    }
                }
                return element;
            })

            setNewData(newEmployeesData)
        }
    }

    const employeesData = {
        data: newData,
        dataChangeHandler: dataChangeHandler,
    }

    return (
        <employeesDataContext.Provider value={employeesData}>
            { children }
        </employeesDataContext.Provider>
    );
};

export default EmployeesContext;