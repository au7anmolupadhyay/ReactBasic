import React, {useState, useEffect} from 'react';

const MyComponent = () =>{

    const [count, setValue] = useState(14);

    useEffect (() => {
        console.log("My component has been mounted...............");
    }, [count]);

    return (
        <div>
            <h3>My component</h3>
            <p>Value of count is {count}</p>
            <button onClick={()=>setValue(count+1)}> Increment</button>
        </div>
        
    )
}

export default MyComponent;