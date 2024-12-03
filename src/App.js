import React, {useState} from 'react';
import MyComponent from './myComp';

const App = () => {

    const [isVisible, setVisible] = useState(true);

    return (
        <div>
            {isVisible ? <MyComponent/> : <></>}
            <button onClick={() => {setVisible(!isVisible)}}>toggle</button>
        </div>
    )
}

export default App;