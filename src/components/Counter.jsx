import React, {useState} from 'react';

const Counter = () => {
    const [count, update] = useState(15);
    console.log(count); 
    return (
        <div>
            <p>Counter Component - {count}</p>
            <button onClick={()=>{update(77)}}>Increment</button>
        </div>
    )
};

export default Counter;