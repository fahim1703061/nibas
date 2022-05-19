import React from 'react'

import {
    
    Routes,
    Route,
  } from "react-router-dom";


  //pages
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Rent from '../pages/Rent/Rent';
import RentDetails from '../pages/RentDetails/RentDetails';
import Services from '../pages/Services/Services';
import Buy from '../pages/Buy/Buy';

function PageRoute() {
  return (
    <div>

    
        
        <Routes>
          {/* <Link></Link> */}
            <Route exact path='/' element = {<Home />}></Route>
            <Route exact path='/rent' element = {<Rent />}></Route>
            <Route exact path='/rent/:id' element = {<RentDetails />}></Route>
            <Route exact path='/buy' element = {<Buy />}></Route>
            <Route exact path='/services' element = {<Services />}></Route>
            <Route  path='*' element = {<Error />}></Route>
        </Routes>
    

    </div>
  )
}

export default PageRoute;