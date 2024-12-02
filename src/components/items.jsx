import React from 'react';

const Item = () => {
    return (
        <li className='list-item'>
            <input type="checkbox" />
            <span className='text-item'>Play Cricket</span>
            <span className='dots-item'>...</span>
        </li>
    )
}

export default Item;