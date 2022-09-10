import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import axios from 'axios'

function MySellList() {

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    const [mylists, setmylists] = useState([])
    const [deleteMsg, setDeleteMsg] = useState('')

    useEffect(() => {

        async function fetchmylists(){

            //start- data from backend
            const headers = { 
                'Content-type': 'application/json',
                  'Authorization': `Bearer ${userInfo.token}`,
                  // 'My-Custom-Header': 'foobar'
              };
            const { data } = await axios.get('/api/sell/mylist/',{ headers })
            setmylists(data)
            console.log(mylists);
            //end- data from backend
            // const { data } = rentHomes_data
            // setRentHomes(buyHomes_data)
          }
        if (userInfo) {
            fetchmylists()
        } else {
            window.location.assign('/login')
        }

    }, [deleteMsg])


    function deleteHandler(id){
            // useEffect(() => {
                async function deleteHome(){

                    if (window.confirm('Are you sure you want to delete this home?')) {
                        const headers = { 
                            'Content-type': 'application/json',
                              'Authorization': `Bearer ${userInfo.token}`,
                              // 'My-Custom-Header': 'foobar'
                          };
            
                        const {data} = await axios.delete(`/api/sell/delete/${id}/`,{ headers })
                        setDeleteMsg(data)
                        console.log('deleted home');
                    }
                }
                deleteHome()
            // },[])
    }
    return (
        <div className='m-3'>
            <h1>Mylist</h1>
            
            <Table striped bordered  responsive className='table-sm' >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {mylists.map(mylist => (
                        <tr key={mylist._id}>
                            <td>{mylist._id}</td>
                            <td>{mylist.title}</td>
                            <td>{mylist.address}</td>
                            <td>{mylist.price} Tk</td>
                            
                            <td>{true ? (
                                <i className='fa fa-check' style={{ color: 'green' }}></i>
                            ) : (
                                    <i className='fa fa-check' style={{ color: 'red' }}></i>
                                )}</td>

                            <td>
                                <LinkContainer to={`/buy/${mylist._id}/`}>
                                    <Button variant='light' className='btn-sm'>
                                        <i className='fa fa-eye'></i>
                                    </Button>
                                </LinkContainer>

                                <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(mylist._id)}>
                                    <i className='fa fa-trash'></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
                    
        </div>
    )
 }
export default MySellList;