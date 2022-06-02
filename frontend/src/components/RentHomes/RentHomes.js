import React from 'react'
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';




function RentHomes( {rentHome}) {
  return (
    <div>
      <Card className='my-3 p-3 rounded' >

      {/* use back tick for template Template literals
      ref : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals */}
        <Link to={`/rent/${rentHome._id}`}>   
            <Card.Img src={rentHome.image} />
        </Link>

        <Card.Body>
            <Link to={`/rent/${rentHome._id}`}>
                <Card.Title as="div" className=''>
                    <strong style={{color: "black"}}>{rentHome.name} {rentHome._id}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="div">
                <div className='my-3'>
                    {rentHome.Description}
                </div>
            </Card.Text>
            <Card.Text as = "h3">
                 Tk. {rentHome.rentperDuration}/{rentHome.duration}
                
            </Card.Text>
        </Card.Body>

            {/* <Card.Title as = "div">
                <strong>{rentHome.name}</strong>
            </Card.Title> */}
      </Card>  
    </div>
  )
}

export default RentHomes;