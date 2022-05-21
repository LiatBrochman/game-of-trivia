import React, {useEffect, useState} from 'react';
import {decode} from "html-entities";
import {useSelector} from "react-redux";


export default function Game() {

    const [state, setState] = useState([])
    const selector = useSelector(state=>state.api)
    useEffect(() => {

        // (async () => {
        //
        //         const newState = [{}, {}, {}, {}, {}]
        //         const allStates =(results)
        //             .map(i => {
        //             return {
        //
        //                 question: ( () => {
        //                     console.log(results[i])
        //                     return results[i].question
        //                 })(),
        //                 answers: (() => {
        //                     const answers = []
        //                     answers.push({
        //                         text: results[i]['correct_answer'],
        //                         isCorrect: true,
        //                         className: "notSelected"
        //                     })
        //                     results[i]["incorrect_answers"].forEach(answer_text => answers.push({
        //                         text: answer_text,
        //                         isCorrect: false,
        //                         className: "notSelected"
        //                     }))
        //                     return answers
        //                 })()
        //
        //             }
        //         })
        //         console.log(allStates)
        //         allStates.forEach(x => newState.push(x))
        //
        //         // const newState = [(() => {
        //         //     return results.map( i => {
        //         //         return {
        //         //             question: results[i].question,
        //         //             answers: () => {
        //         //                 const answers = []
        //         //                 answers.push({
        //         //                     text: results[i]['correct_answer'],
        //         //                     isCorrect: true,
        //         //                     className: "notSelected"
        //         //                 })
        //         //                 results[i]["incorrect_answers"].forEach(answer_text => answers.push({
        //         //                     text: answer_text,
        //         //                     isCorrect: false,
        //         //                     className: "notSelected"
        //         //                 }))
        //         //                 return answers
        //         //             },
        //         //         }
        //         //     })
        //         // })()]
        //
        //         console.log(newState)

                setState(selector)
                // setState([
                //     {
                //         question: results[0].question,
                //
                //         answers: [
                //             {text: results[0]['correct_answer'], isCorrect: true, className: "notSelected"},
                //             {text: results[0]['incorrect_answers'][0], isCorrect: false, className: "notSelected"},
                //             {text: results[0]['incorrect_answers'][1], isCorrect: false, className: "notSelected"},
                //             {text: results[0]['incorrect_answers'][2], isCorrect: false, className: "notSelected"},
                //         ]
                //
                //     },
                //     {
                //         question: results[1].question,
                //
                //         answers: [
                //             {text: results[1]['correct_answer'], isCorrect: true, className: "notSelected"},
                //             {text: results[1]['incorrect_answers'][0], isCorrect: false, className: "notSelected"},
                //             {text: results[1]['incorrect_answers'][1], isCorrect: false, className: "notSelected"},
                //             {text: results[1]['incorrect_answers'][2], isCorrect: false, className: "notSelected"},
                //         ]
                //
                //     },
                //     {
                //         question: results[2].question,
                //
                //         answers: [
                //             {text: results[2]['correct_answer'], isCorrect: true, className: "notSelected"},
                //             {text: results[2]['incorrect_answers'][0], isCorrect: false, className: "notSelected"},
                //             {text: results[2]['incorrect_answers'][1], isCorrect: false, className: "notSelected"},
                //             {text: results[2]['incorrect_answers'][2], isCorrect: false, className: "notSelected"},
                //         ]
                //
                //     },
                //     {
                //         question: results[3].question,
                //
                //         answers: [
                //             {text: results[3]['correct_answer'], isCorrect: true, className: "notSelected"},
                //             {text: results[3]['incorrect_answers'][0], isCorrect: false, className: "notSelected"},
                //             {text: results[3]['incorrect_answers'][1], isCorrect: false, className: "notSelected"},
                //             {text: results[3]['incorrect_answers'][2], isCorrect: false, className: "notSelected"},
                //         ]
                //
                //     },
                //     {
                //         question: results[4].question,
                //
                //         answers: [
                //             {text: results[4]['correct_answer'], isCorrect: true, className: "notSelected"},
                //             {text: results[4]['incorrect_answers'][0], isCorrect: false, className: "notSelected"},
                //             {text: results[4]['incorrect_answers'][1], isCorrect: false, className: "notSelected"},
                //             {text: results[4]['incorrect_answers'][2], isCorrect: false, className: "notSelected"},
                //         ]
                //
                //     },
                // ])


        // })()

    }, [selector])

    // useEffect(  () => {
    //     results.then(results=>{
    //         setState([
    //             {
    //                 question: results[0].question,
    //
    //                 answers: [
    //                     {text: results[0]['correct_answer'], isCorrect: true, className: "notSelected"},
    //                     {text: results[0]['incorrect_answers'][0], isCorrect: false, className: "notSelected"},
    //                     {text: results[0]['incorrect_answers'][1], isCorrect: false, className: "notSelected"},
    //                     {text: results[0]['incorrect_answers'][2], isCorrect: false, className: "notSelected"},
    //                 ]
    //
    //             },
    //             {
    //                 question: results[1].question,
    //
    //                 answers: [
    //                     {text: results[1]['correct_answer'], isCorrect: true, className: "notSelected"},
    //                     {text: results[1]['incorrect_answers'][0], isCorrect: false, className: "notSelected"},
    //                     {text: results[1]['incorrect_answers'][1], isCorrect: false, className: "notSelected"},
    //                     {text: results[1]['incorrect_answers'][2], isCorrect: false, className: "notSelected"},
    //                 ]
    //
    //             },
    //             {
    //                 question: results[2].question,
    //
    //                 answers: [
    //                     {text: results[2]['correct_answer'], isCorrect: true, className: "notSelected"},
    //                     {text: results[2]['incorrect_answers'][0], isCorrect: false, className: "notSelected"},
    //                     {text: results[2]['incorrect_answers'][1], isCorrect: false, className: "notSelected"},
    //                     {text: results[2]['incorrect_answers'][2], isCorrect: false, className: "notSelected"},
    //                 ]
    //
    //             },
    //             {
    //                 question: results[3].question,
    //
    //                 answers: [
    //                     {text: results[3]['correct_answer'], isCorrect: true, className: "notSelected"},
    //                     {text: results[3]['incorrect_answers'][0], isCorrect: false, className: "notSelected"},
    //                     {text: results[3]['incorrect_answers'][1], isCorrect: false, className: "notSelected"},
    //                     {text: results[3]['incorrect_answers'][2], isCorrect: false, className: "notSelected"},
    //                 ]
    //
    //             },
    //             {
    //                 question: results[4].question,
    //
    //                 answers: [
    //                     {text: results[4]['correct_answer'], isCorrect: true, className: "notSelected"},
    //                     {text: results[4]['incorrect_answers'][0], isCorrect: false, className: "notSelected"},
    //                     {text: results[4]['incorrect_answers'][1], isCorrect: false, className: "notSelected"},
    //                     {text: results[4]['incorrect_answers'][2], isCorrect: false, className: "notSelected"},
    //                 ]
    //
    //             },
    //         ])
    //
    //     })
    //     // console.log(results[0])
    // }, [results])

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
