import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import userInfo from '../../CONSTANTS/userConstants'


import './Signup.css'

function Signup() {

    const [errorMessages, setErrorMessages] = useState({});
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [isSubmitted, setIsSubmitted] = useState(userInfo);

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        const form = new FormData(event.target);
        const name = form.get("name")
        console.log(name);

        const uname = form.get("uname")
        console.log(uname);
        const email = form.get("email")
        console.log(email);
        const pass = form.get("pass")
        console.log(pass);
        
        // var { uname, pass } = document.forms[0].value;
        
        // const config = {
        //   headers: {
        //       'Content-type': 'application/json'
        //   }
        // }
        if(password!==confirmPassword){
            setErrorMessages({ name: "uname", message: 'Passwords do not match' });
            return
        }
        const registerInfo = { 
            'name': name,
            'email':email,
            'username': uname, 
            'password': pass 
        };
        const headers = { 
          'Content-type': 'application/json',
            // 'Authorization': 'Bearer my-token',
            // 'My-Custom-Header': 'foobar'
        };
        // try {
          axios.post('http://127.0.0.1:8000/api/users/register/', registerInfo, { headers })
          .then(function (response) {
            console.log(response);
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            // setIsSubmitted(true);
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error.response.data.detail);
            setErrorMessages({ name: "uname", message: error.response.data.detail });
          });
          // axios.post('http://127.0.0.1:8000/api/users/login/', loginInfo, { headers })
              
          // .then(function(response){
          //       // console.log(response);
          //       console.log("hi");
          //       localStorage.setItem('userInfo', JSON.stringify(response.data));
          //     });
          //  .catch(function (error) {
          //       console.log(error);
          //     });
          console.log(registerInfo);
          
          
        // } catch (error) {
        //   console.log((error.response.data.detail));
        //   setErrorMessages({ name: "uname", message: JSON.stringify(error.response.data) });
        // }
    
        
    
        // Find user login info
        // const userData = database.find((user) => user.username === uname);
        // // Compare user info
        // if (userData) {
        //   if (userData.password !== pass) {
        //     // Invalid password
        //     setErrorMessages({ name: "pass", message: errors.pass });
        //   } else {
        //     setIsSubmitted(true);
        //   }
        // } else {
        //   // Username not found
        //   setErrorMessages({ name: "uname", message: errors.uname });
        // }
      };
    
      // Generate JSX code for error message
      const renderErrorMessage = (name) =>
        name === errorMessages.name && (
          <div className="error">{errorMessages.message}</div>
        );



    return (
        <div className='w-50 mx-auto'>
<form className='d-block' onSubmit={handleSubmit}>
                <h3 className='d-block p-3 text-align-center'>Sign Up</h3>
                    {renderErrorMessage("uname")}

                <div className="form-group p-2">
                    <label>First name</label>
                    <input type="text" name="name" className="form-control p-2" placeholder="First name" />
                </div>

                <div className="form-group p-2">
                    <label>username</label>
                    <input type="text" name="uname" className="form-control p-2" placeholder="Username" />
                </div>

                <div className="form-group p-2">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control p-2" placeholder="Enter email" />
                </div>

                <div className="form-group p-2">
                    <label>Password</label>
                    <input type="password" name="pass" className="form-control p-2" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-group p-2">
                    <label>Confirm Password</label>
                    <input type="password" name="cpass" className="form-control p-2" placeholder="Enter password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to='/login'>log in?</Link>
                </p>
            </form>
        </div>
    )
}

export default Signup