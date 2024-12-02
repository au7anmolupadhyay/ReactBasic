import React from 'react';

const Item = (props) => {
    return (
        <li className='list-item'>
            {props.completed ? <></> : <input type="checkbox" />}
            <span className='text-item'>{props.text}</span>
            <span className='dots-item'>...</span>
        </li>
    )
}

export default Item;