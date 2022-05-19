import React from 'react'

import buyHomes from './BuyHomes_data';
import { Row, Col} from 'react-bootstrap'
import BuyHomes from '../../components/BuyHomes/BuyHomes';

function Buy() {
  return (
    <div>

    <h1>GET YOUR HOME</h1>
        <Row>
           {buyHomes.map(buyHome => (
               <Col key={buyHome._id} sm={12} md={6} lg={4} xl={3}>
                    <BuyHomes buyHome = {buyHome} />

               </Col>
           ))} 
        </Row>
    </div>
  )
}

export default Buy;