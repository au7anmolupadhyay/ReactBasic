import React, {useState, useEffect} from 'react';

const Timer = () => {

    const [time, setTime] = useState(0);

    useEffect(() => {
        //mounted
        // const timer = setTimeout(() => setTime(time + 1), 1000);
        console.log(`rerendering the time ${time}`)
        const timer = setInterval(() => setTime(time+1), 1000000);

        return function (){
            console.log(`timer unmounted ${time}`)
            clearTimeout(timer);
        }
    }, [time]);

    return (
        <div>
            <h1>StopWatch</h1>
            <p>Time: {time}</p>
        </div>
    )
}

export default Timer;