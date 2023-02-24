import {useState, useEffect} from 'react';
import {FaGithub, FaSpinner } from 'react-icons/fa';
import { IconContext } from "react-icons";

export function PortfolioComponent(){
    const [error, setError] = useState(null)
    const [isloaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch(`https://api.github.com/users/niklassendelbach/repos`)
        .then(res => res.json())
        .then(
            (result)=>{
                setIsLoaded(true);
                setItems(result);
            },
            (error)=>{
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])
    if(error){
        return <div>Error: {error.message}</div>
    }
    else if(!isloaded){
        return <div><FaSpinner/>Loading...</div>
    }
    else{
        return(
            <div className="main-section">
            <div className="flex-box">
                {items.map(item => (
                    <div className="flex-item" key={item.id}>
                        <div className="main-text">
                        <h3>{item.name}</h3>
                        <p>{item.language}</p>
                        <p>{item.created_at}</p>
                        <IconContext.Provider value={{ color: "grey", style:{verticalAlign: 'middle'}, size: 50 }}>
                        <p><a href={`https://github.com/${item.full_name}`} rel="noreferrer" target="_blank" className="picture-text"><FaGithub className="git-logo"/></a></p>
                        </IconContext.Provider>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        );
    }
}