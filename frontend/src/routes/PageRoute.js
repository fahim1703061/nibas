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
import FAQs from '../pages/FAQs/FAQs';
import BuyDetails from '../pages/BuyDetails/BuyDetails';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Profile from '../pages/Profile/Profile';
import Sell from '../pages/Sell/Sell';
import RentOut from '../pages/RentOut/RentOut';
import UserList from '../pages/UserList/UserList';
import MyRentOutList from '../pages/MyRentOutList/MyRentOutList';
import MySellList from '../pages/MySellList/MySellList';

function PageRoute() {
  return (
    <div>

    
        
        <Routes>
          {/* <Link></Link> */}
            <Route exact path='/' element = {<Home />}></Route>
            <Route exact path='/rent' element = {<Rent />}></Route>
            <Route exact path='/rentout' element = {<RentOut />}></Route>
            <Route exact path='/rentout/mylist' element = {<MyRentOutList />}></Route>
            <Route exact path='/rent/:id' element = {<RentDetails />}></Route>
            <Route exact path='/buy' element = {<Buy />}></Route>
            <Route exact path='/sell' element = {<Sell />}></Route>
            <Route exact path='/sell/mylist' element = {<MySellList />}></Route>
            <Route exact path='/buy/:id' element = {<BuyDetails />}></Route>
            <Route exact path='/services' element = {<Services />}></Route>
            <Route exact path='/faqs' element = {<FAQs />}></Route>
            <Route exact path='/login' element = {<Login />}></Route>
            <Route exact path='/signup' element = {<Signup />}></Route>
            <Route exact path='/profile' element = {<Profile />}></Route>
            <Route exact path='/admin/userlist' element = {<UserList />}></Route>

            <Route  path='*' element = {<Error />}></Route>
        </Routes>
    

    </div>
  )
}

export default PageRoute;