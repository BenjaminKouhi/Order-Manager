import React, { useEffect, useState } from 'react';

import { OrderContext } from './order-context'

import Data from '../../DATA/ORDERS_DATA.json';

const OrderProvider = ({ children }) => {
    const [newDATA, setNewDATA] = useState([]);

    useEffect(() => {
        setNewDATA(Data)
    }, [])

    const dataChangeHandlerM = ( id, action, value ) => {
        setNewDATA(orderData.data)
        if(action === "open") {
            const newOrders = newDATA.map(order => {
                if(order.id === id) {
                    return {
                        ...order,
                        status: "assigned",
                    }
                }
                return order;
            })

            setNewDATA(newOrders);
        } else if (action === "assigned") {
            const newOrders = newDATA.map(order => {
                if(order.id === id) {
                    return {
                        ...order,
                        status: "completed",
                        employee: value,
                    }
                }
                return order;
            })

            setNewDATA(newOrders);
        }
    }

    const orderData = {
        data: newDATA,
        dataChangeHandler: dataChangeHandlerM,
    }

    return (
        <OrderContext.Provider value={orderData}>
            { children }
        </OrderContext.Provider>
    );
};

export default OrderProvider;