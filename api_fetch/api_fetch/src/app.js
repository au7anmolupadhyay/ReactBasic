import {useState, useEffect} from 'react';
import { getPosts } from "./api";
import PostCard from './components/PostCard';
import "./app.css"

function App(){

    const [data, setData] = useState(null);   

    useEffect(() =>{   //why use effect, because we want to see when it mounts
        getPosts().then((posts) => setData(posts));
    }, []);

    return (<div className="App">{
        data ? data.map((e) => <PostCard title={e.title} body={e.body}/>) : <></>
    }</div>)
}

export default App;