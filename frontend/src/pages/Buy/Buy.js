import React, { useState, useEffect } from 'react'

import buyHomes from './BuyHomes_data';
import { Row, Col} from 'react-bootstrap'
import BuyHomes from '../../components/BuyHomes/BuyHomes';
import axios from 'axios'


function Buy() {

  let keyword = window.location.search
  // let keyword = useSearchParams()
  console.log(keyword);


  const [buyHomes, setbuyHomes] = useState([])
  useEffect(() => {
    
    async function fetchbuyHomes(){

      //start- data from backend
      const { data } = await axios.get(`/api/buy/${keyword}`)
      setbuyHomes(data)
      //end- data from backend
      // const { data } = rentHomes_data
      // setRentHomes(buyHomes_data)
    }
    fetchbuyHomes()

    
  }, [keyword])
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