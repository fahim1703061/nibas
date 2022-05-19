import React from 'react'
import RentHomes from '../../components/RentHomes/RentHomes';
import rentHomes from './RentHomes_data';
import { Row, Col} from 'react-bootstrap'

function Rent() {
  return (
    <div>

    <h1>Homes for Rent</h1>
        <Row>
           {rentHomes.map(rentHome => (
               <Col key={rentHome._id} sm={12} md={6} lg={4} xl={3}>
                    <RentHomes rentHome = {rentHome} />

               </Col>
           ))} 
        </Row>
    </div>
  )
}

export default Rent;