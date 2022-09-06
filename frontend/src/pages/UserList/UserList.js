import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import axios from 'axios'

function UserList() {

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    const [users, setUsers] = useState([])
    const [deleteMsg, setDeleteMsg] = useState('')

    useEffect(() => {

        async function fetchUsers(){

            //start- data from backend
            const headers = { 
                'Content-type': 'application/json',
                  'Authorization': `Bearer ${userInfo.token}`,
                  // 'My-Custom-Header': 'foobar'
              };
            const { data } = await axios.get('/api/users/',{ headers })
            setUsers(data)
            console.log(users);
            //end- data from backend
            // const { data } = rentHomes_data
            // setRentHomes(buyHomes_data)
          }
        if (userInfo && userInfo.isAdmin) {
            fetchUsers()
        } else {
            window.location.assign('/login')
        }

    }, [deleteMsg])


    function deleteHandler(id){
            // useEffect(() => {
                async function deleteUser(){

                    if (window.confirm('Are you sure you want to delete this user?')) {
                        const headers = { 
                            'Content-type': 'application/json',
                              'Authorization': `Bearer ${userInfo.token}`,
                              // 'My-Custom-Header': 'foobar'
                          };
            
                        const {data} = await axios.delete(`/api/users/delete/${id}/`,{ headers })
                        setDeleteMsg(data)
                        console.log('deleted user');
                    }
                }
                deleteUser()
            // },[])
    }


    return (
        <div className='m-3'>
            <h1>Users</h1>
            
            <Table striped bordered  responsive className='table-sm' >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ADMIN</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.isAdmin ? (
                                <i className='fa fa-check' style={{ color: 'green' }}></i>
                            ) : (
                                    <i className='fa fa-check' style={{ color: 'red' }}></i>
                                )}</td>

                            <td>
                                <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                    <Button variant='light' className='btn-sm'>
                                        <i className='fa fa-edit'></i>
                                    </Button>
                                </LinkContainer>

                                <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(user._id)}>
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

export default UserList