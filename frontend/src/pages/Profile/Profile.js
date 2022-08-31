import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Table, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios';

function Profile() {

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessages, setErrorMessages] = useState({});
    const [profileInfo, setProfileInfo] = useState([])
      const headers = { 
        'Content-type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`,
          // 'My-Custom-Header': 'foobar'
      };
    if(!userInfo){
        window.location.replace('/')
        // return
    }
    // axios.get('/api/users/profile/', { headers })
    //       .then(function (response) {
    //         console.log(response.data);
    //         // localStorage.setItem('userInfo', JSON.stringify(response.data));
    //         // setIsSubmitted(true);
    //         // window.location.reload();
    //       })
    //       .catch(function (error) {
    //         console.log(error.response.data.detail);
    //         setErrorMessages({ name: "uname", message: error.response.data.detail });
    //       })
        
  useEffect(() => {
    
    async function fetchProfileInfo(){

      //start- data from backend
      const headers = { 
        'Content-type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`,
          // 'My-Custom-Header': 'foobar'
      };
      const { data } = await axios.get('/api/users/profile', { headers })
      setProfileInfo(data)
      //end- data from backend
      // const { data } = rentHomes_data
      // setRentHomes(buyHomes_data)
    }
    fetchProfileInfo()

    
      setName(profileInfo.name)
      setEmail(profileInfo.email)
  }, [profileInfo._id])

    

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
        const updateProfileInfo = { 
            'name': name,
            'email':email,
            // 'username': uname,
            'password': pass 
        };
        const headers = { 
          'Content-type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`,
            // 'My-Custom-Header': 'foobar'
        };
        // try {
          axios.put('http://127.0.0.1:8000/api/users/profile/update/', updateProfileInfo, { headers })
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
          console.log(updateProfileInfo);
          
          
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
        <div>

            <Container>
                <Row className='justify-content-md-center'>
                    <Col md={5}>
                            <h2>User Profile</h2>

                            {renderErrorMessage("uname")}
                            <Form onSubmit={handleSubmit}>

                                <Form.Group controlId='name'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        required
                                        type='name'
                                        placeholder='Enter name'
                                        name='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                

                                <Form.Group controlId='email'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        required
                                        type='email'
                                        name='email'
                                        placeholder='Enter Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control

                                        type='password'
                                        name='pass'
                                        placeholder='Enter Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId='passwordConfirm'>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control

                                        type='password'
                                        placeholder='Confirm Password'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Button type='submit' variant='primary'>
                                    Update
                            </Button>

                            </Form>
                        </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Profile