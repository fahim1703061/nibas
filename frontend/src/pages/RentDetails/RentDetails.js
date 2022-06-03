import React from 'react'

import rentHomes_data from './RentHomes_data';
import { Link, useParams } from 'react-router-dom'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';

function RentDetails() {





  const { id } = useParams();
  const rentHome = rentHomes_data.find((p) => p._id === id)
  function sendRequest() {
    document.getElementById("rqbtn").value = "Request Sent";
    document.getElementById("rqbtn").disabled = true;
  }
  return (
    <div>
      <Link to='/rent' className='btn btn-light my-3'>Go Back</Link>
      <Row>

        <Col md={6}>
          <Image src={rentHome.image} alt={rentHome.title} fluid />
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
              Rent: Tk. {rentHome.rentPerDuration}/{rentHome.duration}
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
                    <strong> Tk. {rentHome.rentPerDuration}/{rentHome.duration}</strong>
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
                  <ListGroup.Item><span  class="image mr-5" style = {{marginRight: '12px'}}><Image src='/images/icons/rentHomes/bath.png' alt="" /></span>Bathroom {rentHome.no_bathrooms}</ListGroup.Item>
                  <ListGroup.Item><span className="image mr-5" style = {{marginRight: '12px'}}><Image src='/images/icons/rentHomes/parking.png' alt=""/></span>Garage { rentHome.no_parkings }</ListGroup.Item>
                  <ListGroup.Item><span class="image" style = {{marginRight: '12px'}}><Image src='/images/icons/rentHomes/kitchen.png' alt=""/></span>Kitchen { rentHome.no_kitchens }</ListGroup.Item>
                  <ListGroup.Item><span class="image" style = {{marginRight: '12px'}}><Image src='/images/icons/rentHomes/area.png' alt=""/></span>Area { rentHome.square_footage }</ListGroup.Item>
                  <ListGroup.Item><span class="image" style = {{marginRight: '12px'}}><Image src='/images/icons/rentHomes/bed.png' alt=""/></span>Bedroom { rentHome.no_bedrooms }</ListGroup.Item>
                </ListGroup>
              </div>
            
            
            
            <div class="col-6">
              
              <h3>Amenities</h3>
              <hr />
              <ul class="amenities-list" style = {{border: '1px solid #eeeeee', listStylePosition: 'inside', columns: '2'}}>
                <li>Air Conditioning</li>
                <li>Bedding</li>
                <li>Balcony</li>
                <li>Cable TV</li>
                <li>Internet</li>
                <li>Parking</li>
                <li>Lift</li>
                <li>Pool</li>
                <li>Dishwasher</li>
                <li>Toaster</li>
              </ul>
            </div>
            
            


          </div>
        </Row>


        

      </div>
    </div>
  )
}

export default RentDetails;