import React, {useState, useEffect} from 'react';
import MyComponent from './myComp';

const App = () => {

    const [isVisible, setVisible] = useState(true);

    useEffect(() => {
        console.log("App is mounting...............");
    }, []);

    return (
        <div>
            {isVisible ? <MyComponent/> : <></>}
            <button onClick={() => {setVisible(!isVisible)}}>toggle</button>
        </div>
    )
}

export default App;