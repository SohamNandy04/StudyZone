import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import regispic from '../assets/footerimg.png'

import { NavLink } from "react-router-dom"

function Signup(){

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        axios.post("api/v1/users/register",{name,phone,email,password})
        .then(result => {console.log(result)
            navigate("/login")}).catch(err => console.log(err))
    }


    return (
        <div className="signup-page d-flex justify-content-center align-items-center vh-100" style={{marginTop: '50px'}}>
            <div className="signup-container p-4 p-md-5 rounded bg-light shadow">
                <h3 className="text-center mb-4">Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input type="text" id="fname" placeholder="Enter First Name" className="form-control" autoComplete="off" required 
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lname" className="form-label">Phone Number</label>
                        <input type="text" id="phno" placeholder="Enter Phone Number" className="form-control" autoComplete="off" required 
                        onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email ID</label>
                        <input type="email" id="email" placeholder="Enter Email" className="form-control" autoComplete="off" required
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" className="form-control" required 
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                    <div className="text-center mt-3">
                        <p>
                            Already have an account? <NavLink to="/login" className="text-decoration-none">Sign In</NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup