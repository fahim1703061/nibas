import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Table,Image, ListGroup, Container,Card } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios';

import "./sell.css";

function Sell() {
  // React States
  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessages, setErrorMessages] = useState({});
    const [profileInfo, setProfileInfo] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [file, setFile] = useState()

  //----- state var for preview starts here------
  const [sellHome, setSellHome] = useState(
    
      {
        'title': '',
        'address': '',
        'description': '',
        'image': '/images/RentHomes/Rent_a_home.webp',
        'price': 0,
        'status': 'Available',
        'contact_no': '',
        'contact_email': '',
        'no_bedrooms': 0,
        'no_bathrooms': 0,
        'no_kitchens': 0,
        'no_parkings': 0,
        'square_footage': 0,
      }
    
  )



  if(userInfo){
    // setIsSubmitted(true);
    console.log();
  }
  // else{
  //   setIsSubmitted(false)
  // }
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

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    const form = new FormData();
    // const uname = form.get("uname")
    // console.log(uname);
    // const pass = form.get("pass")
    // console.log(pass);
    // // var { uname, pass } = document.forms[0].value;

    
    form.append( 'title', sellHome.title)
    form.append('address', sellHome.address)
    
    form.append('description',sellHome.description)
    form.append('price',sellHome.price)
    form.append('status', 'Available')
    form.append('contact_no',sellHome.contact_no)
    form.append('contact_email',sellHome.contact_email)

    form.append('no_bedrooms',sellHome.no_bedrooms)
    form.append('no_bathrooms',sellHome.no_bathrooms)
    form.append('no_kitchens',sellHome.no_kitchens)
    form.append('no_parkings',sellHome.no_parkings)
    form.append('square_footage',sellHome.square_footage)
    form.append('image',file)
    
        

    const config = {
      headers: {
          'Content-type': 'application/json'
      }
    }
    // const loginInfo = { 'username': uname, 'password': pass };
    const headers = { 
      'Content-type': 'multipart/form-data',
      'Authorization': `Bearer ${userInfo.token}`,
        // 'My-Custom-Header': 'foobar'
    };
    try {

      const { data }= await axios.post('/api/sell/', form, { headers })
      console.log(data)
        setIsSubmitted(true);
        window.location.reload();
      // axios.post('http://127.0.0.1:8000/api/sell/', form, { headers })
      // .then(function (response) {
      //   console.log(response);
      //   // localStorage.setItem('userInfo', JSON.stringify(response.data));
      //   setIsSubmitted(true);
      //   window.location.reload();
      // })
      // .catch(function (error) {
      //   console.log(error.response.data.detail);
      //   setErrorMessages({ name: "uname", message: error.response.data.detail });
      // });
      // axios.post('http://127.0.0.1:8000/api/users/login/', loginInfo, { headers })
          
      // .then(function(response){
      //       // console.log(response);
      //       console.log("hi");
      //       localStorage.setItem('userInfo', JSON.stringify(response.data));
      //     });
      //  .catch(function (error) {
      //       console.log(error);
      //     });
      console.log(userInfo);
      
      
    } catch (error) {
      console.log((error.response.data.detail));
      setErrorMessages({ name: "uname", message: JSON.stringify(error.response.data) });
    }

    

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



  const uploadFileHandler = (e) => {
    console.log("uploading");
    setFile(e.target.files[0])
    
    const url = (window.URL.createObjectURL(e.target.files[0]))
    console.log(url);
    setSellHome({
      ...sellHome,                   //object spreading src: sumit saha react hooks
      'image' : `${url}`
    })
    
  }
  const renderForm = (
    <div className="form">
      <Container>
                <Row className=''>
                    <Col >
                            <h2>For sale by Owner</h2>

                            {renderErrorMessage("uname")}
                            <Form onSubmit={handleSubmit}>

                                <Form.Group controlId=''>
                                    <Form.Label>title</Form.Label>
                                    <Form.Control
                                        required
                                        type='name'
                                        placeholder='Enter title'
                                        name='title'
                                        value= {sellHome.title}
                                        onChange={(e) => setSellHome({
                                          ...sellHome,                   //object spreading src: sumit saha react hooks
                                          'title' : e.target.value
                                        })}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                {/* uncooment here */}

                                <Form.Group controlId=''>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        required
                                        type='text'
                                        name='address'
                                        placeholder='Enter address'
                                        value={sellHome.address}
                                        onChange={(e) => setSellHome({
                                          ...sellHome,                   //object spreading src: sumit saha react hooks
                                          'address' : e.target.value
                                        })}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId='description'>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control

                                        as="textarea" rows={3}
                                        name='description'
                                        placeholder='Enter description'
                                        value={sellHome.description}
                                        onChange={(e) => setSellHome({
                                          ...sellHome,                   //object spreading src: sumit saha react hooks
                                          'description' : e.target.value
                                        })}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId=''>
                                    <Form.Label>Phone no.</Form.Label>
                                    <Form.Control
                                        required
                                        type='tel'
                                        name='contact_no'
                                        placeholder='Enter phone number'
                                        value={sellHome.contact_no}
                                        onChange={(e) => setSellHome({
                                          ...sellHome,                   //object spreading src: sumit saha react hooks
                                          'contact_no' : e.target.value
                                        })}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        // required
                                        type='email'
                                        name='contact_email'
                                        placeholder='Enter email'
                                        value={sellHome.contact_email}
                                        onChange={(e) => setSellHome({
                                          ...sellHome,                   //object spreading src: sumit saha react hooks
                                          'contact_email' : e.target.value
                                        })}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId=''>
                                    <Form.Label>Price Tk.</Form.Label>
                                    <Form.Control
                                        required
                                        type='number'
                                        name='price'
                                        placeholder='Enter price'
                                        value={sellHome.price}
                                        onChange={(e) => setSellHome({
                                          ...sellHome,                   //object spreading src: sumit saha react hooks
                                          'price' : e.target.value
                                        })}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId=''>
                                    <Form.Label>no_bedrooms</Form.Label>
                                    <Form.Control
                                        required
                                        type='number'
                                        name='no_bedrooms'
                                        placeholder='Enter no_bedrooms'
                                        value={sellHome.no_bedrooms}
                                        onChange={(e) => setSellHome({
                                          ...sellHome,                   //object spreading src: sumit saha react hooks
                                          'no_bedrooms' : e.target.value
                                        })}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId=''>
                                    <Form.Label>no_bathrooms</Form.Label>
                                    <Form.Control
                                        required
                                        type='number'
                                        name='no_bathrooms'
                                        placeholder='Enter no_bathrooms'
                                        value={sellHome.no_bathrooms}
                                        onChange={(e) => setSellHome({
                                          ...sellHome,                   //object spreading src: sumit saha react hooks
                                          'no_bathrooms' : e.target.value
                                        })}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId=''>
                                    <Form.Label>no_kitchens</Form.Label>
                                    <Form.Control
                                        required
                                        type='number'
                                        name='no_kitchens'
                                        placeholder='Enter no_kitchens'
                                        value={sellHome.no_kitchens}
                                        onChange={(e) => setSellHome({
                                          ...sellHome,                   //object spreading src: sumit saha react hooks
                                          'no_kitchens' : e.target.value
                                        })}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId=''>
                                    <Form.Label>no_parkings</Form.Label>
                                    <Form.Control
                                        required
                                        type='number'
                                        name='no_parkings'
                                        placeholder='Enter no_parkings'
                                        value={sellHome.no_parkings}
                                        onChange={(e) => setSellHome({
                                          ...sellHome,                   //object spreading src: sumit saha react hooks
                                          'no_parkings' : e.target.value
                                        })}
                                    >
                                    </Form.Control>
                                </Form.Group>


                                <Form.Group controlId=''>
                                    <Form.Label>square_footage</Form.Label>
                                    <Form.Control
                                        required
                                        type='number'
                                        name='square_footage'
                                        placeholder='Enter square_footage'
                                        value={sellHome.square_footage}
                                        onChange={(e) => setSellHome({
                                          ...sellHome,                   //object spreading src: sumit saha react hooks
                                          'square_footage' : e.target.value
                                        })}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                

                                <Form.Group controlId='formFile'>
                                    <Form.Label>Photo of Home</Form.Label>
                                    <Form.Control
                                        disabled
                                        type='text'
                                        name='image'
                                        placeholder='upload image'
                                        value={sellHome.image}
                                        // onChange={(e) => setSellHome({
                                        //   ...sellHome,                   //object spreading src: sumit saha react hooks
                                        //   'image' : e.target.value
                                        // })}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formFile" className="mb-3">
                                        {/* <Form.Label>Image of home</Form.Label> */}
                                        <Form.Control type="file"
                                          // value={file}
                                          onChange={uploadFileHandler}
                                          
                                        
                                        
                                        />
                                      </Form.Group>



                                {/* <Form.Group as={Row}>
                                  <Form.File
                                    type="file"
                                    className="custom-file-label"
                                    id="inputGroupFile01"
                                    label='upload'
                                    
                                    custom
                                  />
                                </Form.Group> */}
{/* 
                              <Form.Group controlId='formFile'>
                                <Form.Label>Image</Form.Label>
                                <Form.Control

                                    type='file'
                                    placeholder='Enter image'
                                    value={sellHome.image}
                                    onChange={(e) => setSellHome({
                                      ...sellHome,                   //object spreading src: sumit saha react hooks
                                      'image' : e.target.value
                                    })}
                                >
                                </Form.Control> */}

                                {/* <Form.File
                                    type='file'
                                    id='image-file'
                                    label='Choose File'
                                    custom
                                    onChange={uploadFileHandler}
                                >

                                </Form.File> */}
                                

                            {/* </Form.Group> */}

                                <Button type='submit' variant='primary' className='submit'>
                                    Add to sell
                            </Button>
                            <Button  variant='primary' onClick={(e)=> setIsPreview(true)}>
                                    preview
                            </Button>
                            </Form>
                        </Col>

                </Row>
                
            </Container>
      
    </div>
  );

  const renderPreview = (
    <div>
      <div>
      <Button  className='btn btn-light my-3' onClick={(e) => setIsPreview(false)}>Go Back</Button>
      <Row>

        <Col md={6} >

        <div class=" mx-auto" style = {{width: 'fit-content'}}>

           <Image className='d-block' src={sellHome.image} alt={ sellHome.title} fluid />
        </div>
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{sellHome.title}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              Address: {sellHome.address}
            </ListGroup.Item>

            <ListGroup.Item>
              Contact No: {sellHome.contact_no}
            </ListGroup.Item>

            <ListGroup.Item>
              Price: Tk. {sellHome.price}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong> Tk. {sellHome.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {sellHome.status}
                  </Col>
                </Row>
              </ListGroup.Item>


              {/* inactive button bcz no need */}

              {/* <ListGroup.Item>
                <Button id='rqbtn' as='input'
                  value='Send a Request'
                  onClick={(e) => setIsPreview(false)}
                  className='btn-block'
                  disabled={sellHome.status === 'Not Available'}
                  type='button' />
                {' '}
              </ListGroup.Item> */}
            </ListGroup>
          </Card>
        </Col>


      </Row>


      <div class="content">

        <Row>
          <h3>Description</h3>

          <p> {sellHome.description}</p>
        </Row>

        <Row>


          <div class="row mt-30 mb-30">
            
            <Col>
              <div class="col-11">
                <h3>Condition</h3>
                <hr />
                <ListGroup variant="flush" class="feature-list my-4" style = {{border: '1px solid #eeeeee'}} >
                  <ListGroup.Item><span class="image" style = {{marginRight: '12px'}}><Image src='/images/icons/sellHomes/area.png' alt=""/></span>Area { sellHome.square_footage }</ListGroup.Item>
                  <ListGroup.Item><span class="image" style = {{marginRight: '12px'}}><Image src='/images/icons/sellHomes/bed.png' alt=""/></span>Bedroom { sellHome.no_bedrooms }</ListGroup.Item>
                  <ListGroup.Item><span  class="image mr-5" style = {{marginRight: '12px'}}><Image src='/images/icons/sellHomes/bath.png' alt="" /></span>Bathroom {sellHome.no_bathrooms}</ListGroup.Item>
                  <ListGroup.Item><span class="image" style = {{marginRight: '12px'}}><Image src='/images/icons/sellHomes/kitchen.png' alt=""/></span>Kitchen { sellHome.no_kitchens }</ListGroup.Item>
                  <ListGroup.Item><span className="image mr-5" style = {{marginRight: '12px'}}><Image src='/images/icons/sellHomes/parking.png' alt=""/></span>Garage { sellHome.no_parkings }</ListGroup.Item>
                </ListGroup>
              </div>
            
              </Col>
              <Col>
            <div class="col-11">
              
              <h3>Amenities</h3>
              <hr />
              <ul class="amenities-list list-unstyled" style = {{border: '1px solid #eeeeee', listStylePosition: 'inside', columns: '2'}}>
                <li><i class="fa fa-hand-o-right p-2 text-info" aria-hidden="true"></i>Air Conditioning</li>
                <li><i class="fa fa-hand-o-right p-2 text-info" aria-hidden="true"></i>Bedding</li>
                <li><i class="fa fa-hand-o-right p-2 text-info" aria-hidden="true"></i>Balcony</li>
                <li><i class="fa fa-hand-o-right p-2 text-info" aria-hidden="true"></i>Cable TV</li>
                <li><i class="fa fa-hand-o-right p-2 text-info" aria-hidden="true"></i>Internet</li>
                <li><i class="fa fa-hand-o-right p-2 text-info" aria-hidden="true"></i>Parking</li>
                <li><i class="fa fa-hand-o-right p-2 text-info" aria-hidden="true"></i>Lift</li>
                <li><i class="fa fa-hand-o-right p-2 text-info" aria-hidden="true"></i>Pool</li>
                <li><i class="fa fa-hand-o-right p-2 text-info" aria-hidden="true"></i>Dishwasher</li>
                <li><i class="fa fa-hand-o-right p-2 text-info" aria-hidden="true"></i>Toaster</li>
              </ul>
            </div>
            
            </Col>


          </div>
        </Row>


        

      </div>
    </div>
    </div>
  );

  return (
    <div className="sell">
      <div className="sell-form">
        <div className="title"></div>

        {isSubmitted ? (<div>Your home is successfully listed</div>) : (
          isPreview ? renderPreview : renderForm
        )}
      </div>
    </div>
  );
}

export default Sell