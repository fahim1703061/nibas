import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

  //pages
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';

function PageRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element = {<Home />}></Route>
            <Route  path='*' element = {<Error />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default PageRoute;