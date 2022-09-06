import React from 'react'

import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function BuyHomes({buyHome}) {
  return (
    <div>
      <Card className='my-3 p-3 rounded' >
        <Link to={`/buy/${buyHome._id}`}>
            <Card.Img src={buyHome.image} />
        </Link>

        <Card.Body>
            <Link to={`/buy/${buyHome._id}`}>
                <Card.Title as="div" className=''>
                    <strong style={{color: "black"}}>{buyHome.name}</strong>
                </Card.Title>
            </Link>
            <Card.Title as = "div">
                <strong>{buyHome.title}</strong>
            </Card.Title>
            <Card.Text as="div">
                <div className='my-3'>
                    {buyHome.description}
                </div>
            </Card.Text>
            <Card.Text as = "h3">
                Price: {buyHome.price}Tk
                
            </Card.Text>
        </Card.Body>

            
      </Card>  
    </div>
  )
}

export default BuyHomes;