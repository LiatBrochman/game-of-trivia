import React, {useEffect, useState} from 'react';
import {decode} from "html-entities";
import {useSelector} from "react-redux";
import './Game.css';


export default function Game() {

    const [state, setState] = useState([])

    const selector = useSelector(state => state.api)

    useEffect(() => {
        setState(selector)
    }, [selector])

    const renderApp = (state) => state.map((questionElement, rowIndex) => {

        return (

            <div key={rowIndex}>

                <h2 className="game-title">{decode(questionElement.question)}</h2>

                <div>

                    {questionElement.answers.map((selected, index) => {

                        return (

                            <button key={index}
                                    onClick={() => {
                                        if (selected.className === "Selected") return;

                                        questionElement.answers.forEach(answer => {


                                            switch (answer.className === selected.className) {

                                                case true:
                                                    answer.className = "Selected"
                                                    break;


                                                default:
                                                    answer.className = "notSelected"
                                                    break;

                                            }
                                        })

                                    }}
                                    className={selected.className}
                            >

                                {decode(selected.text)}

                            </button>

                        )
                    })}

                </div>

            </div>
        )
    })


    return (
        <div>
            {state && state[0] && state[0].question && renderApp(state)}
        </div>
    );
}
