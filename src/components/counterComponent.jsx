import React, {useState} from 'react';

const Counter = () => {
    const [count, update] = useState(15);
    console.log(count); 
    return (
        <div>   
            <p>Count is {count}</p>
            {(count %2 === 0) ? <p>Value is even</p> : <p>Value is odd</p>}
            <button onClick={()=>{update(count + 1)}}>Increment</button>
            <button onClick={()=>{update(count - 1)}}>Decrement</button>
        </div>
    )
};

export default Counter;