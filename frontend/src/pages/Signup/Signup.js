import React from 'react'
import { Link } from 'react-router-dom'

import './Signup.css'

function Signup() {
    return (
        <div className='w-50 mx-auto'>
<form className='d-block'>
                <h3 className='d-block p-3 text-align-center'>Sign Up</h3>

                <div className="form-group p-2">
                    <label>First name</label>
                    <input type="text" className="form-control p-2" placeholder="First name" />
                </div>

                <div className="form-group p-2">
                    <label>User Nmae</label>
                    <input type="text" className="form-control p-2" placeholder="User Nmae" />
                </div>

                <div className="form-group p-2">
                    <label>Email</label>
                    <input type="email" className="form-control p-2" placeholder="Enter email" />
                </div>

                <div className="form-group p-2">
                    <label>Password</label>
                    <input type="password" className="form-control p-2" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to='/login'>log in?</Link>
                </p>
            </form>
        </div>
    )
}

export default Signup