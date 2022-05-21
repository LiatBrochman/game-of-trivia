import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import React from "react";
import '../Game.css';


export const run = createAsyncThunk('api/run', async () => {

    try {
        return axios(`https://opentdb.com/api.php?amount=25`).then(res => res.data.results)

    } catch (e) {
        console.error(e)
    }
})

const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const apiSlice = createSlice({
    name: 'api',
    initialState:[],
    reducers:{},
    extraReducers: {

        [run.fulfilled]: (state, action) => {

            state = action.payload.map(row => {
                return {
                    question: row["question"],
                    answers: (() => {
                            const answers = []
                            answers.push({
                                text: row['correct_answer'],
                                isCorrect: true,
                                className: "notSelected"
                            })
                            row["incorrect_answers"].forEach(answer_text => answers.push({
                                text: answer_text,
                                isCorrect: false,
                                className: "notSelected"
                            }))

                            return shuffle(answers)
                        }

                    )()
                }
            })

            return state;

            // const action.payload = action.payload
            // state = results.map(i => {
            //
            //     return {
            //         question: results[i].question,
            //         answers: (() => {
            //                 const answers = []
            //                 answers.push({
            //                     text: results[i]['correct_answer'],
            //                     isCorrect: true,
            //                     className: "notSelected"
            //                 })
            //                 results[i]["incorrect_answers"].forEach(answer_text => answers.push({
            //                     text: answer_text,
            //                     isCorrect: false,
            //                     className: "notSelected"
            //                 }))
            //                 return answers
            //             }
            //
            //         )()
            //     }
            // })

        }
    },
})


export const {} = apiSlice.actions

export default apiSlice.reducer