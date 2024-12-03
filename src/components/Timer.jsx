import React, {useState, useEffect} from 'react';

const Timer = () => {

    const [time, setTime] = useState(0);

    useEffect(() => {
        // const timer = setTimeout(() => setTime(time + 1), 1000);
        const timer = setInterval(() => setTime(time+1), 1000);

        return function (){
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