import React from 'react'

import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function BuyHomes({buyHome}) {
  return (
    <div>
      <Card className='my-3 p-3 rounded' >
        <Link to={'/rent/:{buyHome._id}'}>
            <Card.Img src={buyHome.image} />
        </Link>

        <Card.Body>
            <Link to='/rent/'>
                <Card.Title as="div" className=''>
                    <strong style={{color: "black"}}>{buyHome.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="div">
                <div className='my-3'>
                    {buyHome.Description}
                </div>
            </Card.Text>
            <Card.Text as = "h3">
                Price: {buyHome.price}Tk
                
            </Card.Text>
        </Card.Body>

            {/* <Card.Title as = "div">
                <strong>{rentHome.name}</strong>
            </Card.Title> */}
      </Card>  
    </div>
  )
}

export default BuyHomes;