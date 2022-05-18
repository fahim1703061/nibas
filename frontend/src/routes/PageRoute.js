import React from 'react'

import {
    
    Routes,
    Route,
  } from "react-router-dom";

  //pages
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';

function PageRoute() {
  return (
    <div>

    
        
        <Routes>
          {/* <Link></Link> */}
            <Route exact path='/' element = {<Home />}></Route>
            <Route  path='*' element = {<Error />}></Route>
        </Routes>
    

    </div>
  )
}

export default PageRoute;