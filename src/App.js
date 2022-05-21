import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {Fragment} from 'react';
import Home from "./Home";
import End from "./End";
import Game from "./Game";

function App() {
  return (
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/end" element={<End/>}/>

            <Route path="/game" element={<Game/>}/>

          </Routes>
        </Fragment>
      </BrowserRouter>
  )
}

export default App;
