import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap';

function Insights() {

  const [fig, setFig] = useState('')
  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
  useEffect(() => {
    
    async function fetchInsight(){
      //start- data from backend
      const headers = { 
        'Content-type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`,
          // 'My-Custom-Header': 'foobar'
      };
      const { data } = await axios.get('/api/insight/',{ headers })
      setFig(data)
      console.log(fig);
      //end- data from backend
    }
    if (userInfo) {
      fetchInsight()
    } else {
        window.location.assign('/login')
    }


  }, [])
  return (
    <div>
      <h2>Insights</h2>
      <Row>

        <Col sm={12} md={6}>
          <div class=" mx-auto" style = {{width: 'fit-content'}}>
            <h3>Home Insights</h3>
              <Image className='d-block' src={fig.ListingFig} alt={'Home Insights'} fluid />
          </div>
          
          
        </Col>
        <Col sm={12} md={6}>
          <div class=" mx-auto" style = {{width: 'fit-content'}}>
            <h3>Users Insights</h3>
              <Image className='d-block' src={fig.UsersFig} alt={'Users Insights'} fluid />
          </div>
          
          
        </Col>
      </Row>
    </div>
  )
}

export default Insights