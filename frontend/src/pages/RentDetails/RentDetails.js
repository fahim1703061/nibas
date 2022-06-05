import React, { useState, useEffect } from 'react'

import rentHomes_data from './RentHomes_data';
import { Link, useParams } from 'react-router-dom'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import axios from 'axios'

function RentDetails() {

  const { id } = useParams();

  const [rentHomes, setRentHomes] = useState([])
  useEffect(() => {
    
    async function fetchRentHomes(){
      
      //start- data from backend
      const { data } = await axios.get(`/api/rent/${id}`)
      setRentHomes(data)
      //end- data from backend
      // const { data } = rentHomes_data
      // setRentHomes(rentHomes_data)
    }
    fetchRentHomes()

    
  }, [])

  // const { id } = useParams();
  // const rentHome = rentHomes.find((p) => p._id === id)  //for frontend
  
  const rentHome = rentHomes    //for backend
  function sendRequest() {
    document.getElementById("rqbtn").value = "Request Sent";
    document.getElementById("rqbtn").disabled = true;
  }
  return (
    <div>
      <Link to='/rent' className='btn btn-light my-3'>Go Back</Link>
      <Row>

        <Col md={6} className="justify-content-md-center">
          <div class=" mx-auto" style = {{width: 'fit-content'}}>

            <Image className='d-block' src={rentHome.image} alt={rentHome.title} fluid />
          </div>
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{rentHome.title}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              Address: {rentHome.address}
            </ListGroup.Item>

            <ListGroup.Item>
              Contact No: {rentHome.contact_no}
            </ListGroup.Item>

            <ListGroup.Item>
              Rent: Tk. {rentHome.pricePerDuration}/{rentHome.duration}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Rent:</Col>
                  <Col>
                    <strong> Tk. {rentHome.pricePerDuration}/{rentHome.duration}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {rentHome.status}
                  </Col>
                </Row>
              </ListGroup.Item>




              <ListGroup.Item>
                <Button id='rqbtn' as='input'
                  value='Send a Request'
                  onClick={sendRequest}
                  className='btn-block'
                  disabled={rentHome.status === 'Not Available'}
                  type='button' />
                {' '}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>


      </Row>


      <div class="content">

        <Row>
          <h3>Description</h3>

          <p> {rentHome.description}</p>
        </Row>

        <Row>


          <div class="row mt-30 mb-30">
            
            
              <div class="col-6">
                <h3>Condition</h3>
                <hr />
                <ListGroup variant="flush" class="feature-list my-4" style = {{border: '1px solid #eeeeee'}} >
                  <ListGroup.Item><span class="image p-2" ><Image src='/images/icons/rentHomes/area.png' alt=""/></span>Area { rentHome.square_footage }</ListGroup.Item>
                  <ListGroup.Item><span class="image p-2" ><Image src='/images/icons/rentHomes/bed.png' alt=""/></span>Bedroom { rentHome.no_bedrooms }</ListGroup.Item>
                  <ListGroup.Item><span  class="image p-2"><Image src='/images/icons/rentHomes/bath.png' alt="" /></span>Bathroom {rentHome.no_bathrooms}</ListGroup.Item>
                  <ListGroup.Item><span class="image p-2"><Image src='/images/icons/rentHomes/kitchen.png' alt=""/></span>Kitchen { rentHome.no_kitchens }</ListGroup.Item>
                  <ListGroup.Item><span className="image p-2"><Image src='/images/icons/rentHomes/parking.png' alt=""/></span>Garage { rentHome.no_parkings }</ListGroup.Item>
                </ListGroup>
              </div>
            
            
            
              <div class="col-6">
              
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
            
            


          </div>
        </Row>


        

      </div>
    </div>
  )
}

export default RentDetails;