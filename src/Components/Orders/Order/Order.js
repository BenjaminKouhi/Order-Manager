import React, { useState } from 'react';
import Style from './Style/Order.module.css';

import OrderStatus from './OrderStatus/OrderStatus';

const Order = ({id, firstName, lastName, email, orderStatus, orderEmployee, dataChangeHandler}) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className={Style.Container}>
            <div className={Style.id}>{id}</div>
            <div className={Style.name}>{lastName} - {firstName}</div>
            <div>{email}</div>
            <div className={
                orderStatus === 'open' ? Style.orderStatusOpen :
                orderStatus === 'assigned' ? Style.orderStatusAssigned :
                Style.orderStatusCompleted
            } onClick={() => {
                setToggle(true);
            }}>{orderStatus}</div>
            {toggle && <OrderStatus 
                setToggle={setToggle} 
                id={id} firstName={firstName} lastName={lastName} email={email}
                orderStatus={orderStatus} orderEmployee={orderEmployee}
                dataChangeHandler={dataChangeHandler}
            />}
        </div>
    );
};

export default Order;