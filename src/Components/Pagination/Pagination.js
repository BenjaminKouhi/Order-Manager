import React from 'react';
import Style from './Style/Pagination.module.css';

const Pagination = ({orderPerPage, orderLength, paginate}) => {
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(orderLength / orderPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div>
            <ul>
                {pageNumber.map(number => (
                    <li key={number} onClick={() => paginate(number)}>
                        {number}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;