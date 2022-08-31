import React, { useState, useEffect } from 'react'

import { Link, useParams } from 'react-router-dom'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import axios from 'axios'
import buyHomes_data from './BuyHomes_data'

function BuyDetails() {

  const { id } = useParams();

  const [buyHomes, setbuyHomes] = useState([])
  useEffect(() => {
    
    async function fetchbuyHomes(){
      
      //start- data from backend
      const { data } = await axios.get(`/api/buy/${id}`)
      setbuyHomes(data)
      //end- data from backend
      // const { data } = buyHomes_data
      // setbuyHomes(buyHomes_data)
    }
    fetchbuyHomes()

    
  }, [])

  // const { id } = useParams();
  // const buyHome = buyHomes_data.find((p) => p._id === id) //for frontend
  const buyHome = buyHomes    //for backend
  function sendRequest() {
    document.getElementById("rqbtn").value = "Request Sent";
    document.getElementById("rqbtn").disabled = true;
  }
  return (
    <div>
      <Link to='/rent' className='btn btn-light my-3'>Go Back</Link>
      <Row>

        <Col md={6} >

        <div class=" mx-auto" style = {{width: 'fit-content'}}>

           <Image className='d-block' src={buyHome.image} alt={buyHome.title} fluid />
        </div>
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{buyHome.title}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              Address: {buyHome.address}
            </ListGroup.Item>

            <ListGroup.Item>
              Contact No: {buyHome.contact_no}
            </ListGroup.Item>

            <ListGroup.Item>
              Price: Tk. {buyHome.price}
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
                    <strong> Tk. {buyHome.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {buyHome.status}
                  </Col>
                </Row>
              </ListGroup.Item>




              <ListGroup.Item>
                <Button id='rqbtn' as='input'
                  value='Send a Request'
                  onClick={sendRequest}
                  className='btn-block'
                  disabled={buyHome.status === 'Not Available'}
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

          <p> {buyHome.description}</p>
        </Row>

        <Row>


          <div class="row mt-30 mb-30">
            
            <Col>
              <div class="col-11">
                <h3>Condition</h3>
                <hr />
                <ListGroup variant="flush" class="feature-list my-4" style = {{border: '1px solid #eeeeee'}} >
                  <ListGroup.Item><span class="image" style = {{marginRight: '12px'}}><Image src='/images/icons/buyHomes/area.png' alt=""/></span>Area { buyHome.square_footage }</ListGroup.Item>
                  <ListGroup.Item><span class="image" style = {{marginRight: '12px'}}><Image src='/images/icons/buyHomes/bed.png' alt=""/></span>Bedroom { buyHome.no_bedrooms }</ListGroup.Item>
                  <ListGroup.Item><span  class="image mr-5" style = {{marginRight: '12px'}}><Image src='/images/icons/buyHomes/bath.png' alt="" /></span>Bathroom {buyHome.no_bathrooms}</ListGroup.Item>
                  <ListGroup.Item><span class="image" style = {{marginRight: '12px'}}><Image src='/images/icons/buyHomes/kitchen.png' alt=""/></span>Kitchen { buyHome.no_kitchens }</ListGroup.Item>
                  <ListGroup.Item><span className="image mr-5" style = {{marginRight: '12px'}}><Image src='/images/icons/buyHomes/parking.png' alt=""/></span>Garage { buyHome.no_parkings }</ListGroup.Item>
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
  )
}

export default BuyDetails;