import React, { useContext, useState } from 'react';
import Style from './Style/Orders.module.css';

import { OrderContext } from '../../Store/Context/Orders/order-context';
import Order from './Order/Order';
import Pagination from '../Pagination/Pagination';

const Orders = () => {
    const orderData = useContext(OrderContext);

    const [currentPage, setCurrentPage] = useState(1);
    const [orderPerPage] = useState(5);
    const indexOfFirstOrder = currentPage * orderPerPage;
    const indexOfLastOrder = indexOfFirstOrder - orderPerPage;
    const currentOrders = orderData.data.slice(indexOfLastOrder, indexOfFirstOrder);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    }
    
    return (
        <div className={Style.Container}>
            <h1>Orders</h1>
            <div className={Style.Orders}>
                {currentOrders.map(element => <Order 
                    key={element.id} 
                    id={element.id} 
                    firstName={element.first_name} 
                    lastName={element.last_name} 
                    email={element.email}
                    orderStatus={element.status}
                    orderEmployee={element.employee}
                    dataChangeHandler={orderData.dataChangeHandler}
                />)}
            </div>
            <Pagination orderLength={orderData.data.length} orderPerPage={orderPerPage} paginate={paginate} />
        </div>
    );
};

export default Orders;