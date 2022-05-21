import './Home.css';
import {Link} from "react-router-dom";
import React from "react";
import axios from "axios";
import {decode} from "html-entities";

export default function Home(){
   axios(`https://opentdb.com/api.php?amount=25`).then(res => res.data.results).then(results=> results.map(i=> console.log(decode(i.question))))

    return(
        <div>
         <h1 className="home-title">Quizzical</h1>
         <p className="home-description">Some description if needed</p>
            <button className="home-button"><Link to="/game" className="link">Start quiz</Link></button>
        </div>
    )

}
