import React, {useState, useEffect} from 'react';

const MyComponent = () =>{

    const [count, setValue] = useState(14);

    useEffect(() => {
        console.log("My component has been mounted..............");
    }, [])

    useEffect (() => {
        console.log(`Value is : ${count}`);
    }, [count]); //dependency array, whatever is updating or can be updated is passed to execute useEffect

    return (
        <div>
            <h3>My component</h3>
            <p>Value of count is {count}</p>
            <button onClick={()=>setValue(count+1)}> Increment</button>
        </div>
        
    )
}

export default MyComponent;