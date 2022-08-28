import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import "./login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const form = new FormData(event.target);
    const uname = form.get("uname")
    console.log(uname);
    const pass = form.get("pass")
    console.log(pass);
    // var { uname, pass } = document.forms[0].value;
    
    const config = {
      headers: {
          'Content-type': 'application/json'
      }
    }
    const loginInfo = { 'username': uname, 'password': pass };
    const headers = { 
      'Content-type': 'application/json',
        // 'Authorization': 'Bearer my-token',
        // 'My-Custom-Header': 'foobar'
    };
    // try {
      axios.post('http://127.0.0.1:8000/api/users/login/', loginInfo, { headers })
      .then(function (response) {
        console.log(response);
        localStorage.setItem('userInfo', JSON.stringify(response.data));
        setIsSubmitted(true);
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
      console.log(loginInfo);
      
      
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

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
      {renderErrorMessage("uname")}
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <div>
          <p>New here? <Link to='/signup' className="text-primary">Sign Up!</Link></p>
      </div>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;