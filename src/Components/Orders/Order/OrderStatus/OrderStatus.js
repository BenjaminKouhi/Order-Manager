import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import Style from './Style/OrderStatus.module.css';

import { employeesDataContext } from '../../../../Store/Context/Employees/employees-context';

const OrderStatus = ({ setToggle, id, firstName, lastName, email, orderStatus, orderEmployee, dataChangeHandler}) => {
    const [employees] = useState(useContext(employeesDataContext));
    const [employee, setEmployee] = useState();

    const selectHandler = (event) => {
        setEmployee(event.target.value)
    }

    const openHandler = () => {
        dataChangeHandler(id, "open", "");
    }

    const assignedHandler = () => {
        if(employee) {
            dataChangeHandler(id, "assigned", employee);
        }
    }

    return ReactDOM.createPortal(
        <div>
            <div className={Style.overlay}>
                <div className={Style.modal}>
                    <div className={Style.detail}>Order Detail</div>
                    <div className={Style.Container}>
                        <div className={Style.name}>{id}. {lastName} - {firstName}</div>
                        <div className={Style.name}>{email}</div>
                        {orderStatus === "open" && 
                            <div>
                                <button onClick={openHandler} className={Style.openBTN}>Assign</button>
                            </div>
                        }
                        {orderStatus ==="assigned" && 
                            <div>
                                <button className={Style.assignedBTN} onClick={assignedHandler}>Complete</button>
                                <select className={Style.assignedSLC} defaultValue="" onChange={selectHandler}>
                                    <option value="">---</option>
                                    {employees.data.map(employee => <option key={employee.id}>{employee.last_name} - {employee.first_name}</option>)}
                                </select>
                            </div>
                        }
                        {orderStatus === "completed" && 
                            <div className={Style.Complete}>Completed</div>
                        }
                    </div>
                    <div className={Style.x} onClick={() => setToggle(false)}>X</div>
                </div>
            </div>
        </div>, 
        document.getElementById("portal")
    );
};

export default OrderStatus;