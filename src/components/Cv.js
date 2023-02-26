import {useState, useEffect} from 'react';
import Cvbild from '../img/CVbild.jpg'
import { FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import { IconContext } from "react-icons";

export function CvComponent () {
    const [error, setError] = useState(null)
    const [isloaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch("nsreactwp/MyCv.json")
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
        console.error(error)
        return <div>Error: {error.message}</div>
    }
    else if(!isloaded){
        return <div>Loading...</div>
    }
    else{
        return(
            <div className="main-section">
                <div className="flex-box">
                    <aside>
                    <img className="flex-item" src={Cvbild} alt="me on cv" />
                    <IconContext.Provider value={{ color: "grey", style:{verticalAlign: 'middle'}, size: 50 }}>
                    <div className="picture-text"><FaMobileAlt />070-22 66 835</div>    
                    <div className="picture-text"><FaEnvelope /> niklas@sendelbach.se</div> 
                    </IconContext.Provider>   
                    </aside>
                <div >
                <div className="flex-text">
                    <h1 className="right-header">Arbete</h1>
                        {
                        items['Work'].map((info, id) => (
                            <div key={id}>
                                <h5 key={id+1}>{info.date}</h5>
                                <h6 key={id+2}>{info.company}</h6>
                                <p key={id+3}>{info.info}</p>
                            </div>
                        ))
                        }
                    <h1 className="right-header">Utbildning</h1>
                        {
                        items['Education'].map((info, id) => (
                            <div className="pb-2" key={id}>
                                <h5 key={id+1}>{info.date}</h5>
                                <h6 key={id+2}>{info.title}</h6>
                                <p key={id+3}>{info.info}</p>
                        {info.list && info.list.map( lists => {
                            return (
                                <div>
                                    <li>{lists}</li>
                                </div>
                            )
                        })}        
                            </div>
                        ))
                        }
                    <h1 className="right-header">Övriga Prestationer</h1>
                        {
                        items['Other'].map((info, id) => (
                            <div className="pb-2" key={id}>
                                <p key={id+1}>{info.info}</p>  
                            </div>
                        ))
                        }
                </div>
                </div>
                </div>
            </div>
        );
    }
}