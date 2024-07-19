// import { useState } from 'react'
// import regispic from '../assets/footerimg.png'

import { NavLink } from "react-router-dom"

function Signup(){

    // const [user, setUser] = useState({
    //     username: "",
    // });

    // const handleInput = (e) => {
    //     let name = e.target.name;
    //     let value = e.target.value;

    //     setUser({
    //         ...user,
    //     [name] : value,
    //     })
    // }
    // value={user.username}
    // onChange={handleInput}

    return (
        <>
            <div className="signup template d-flex justify-content-center align-items-center 100-w vh-100">
                <div className="40-w p-5 rounded bg-white">
                    <form action="">
                        <h3 className="text-center">Sign Up</h3>
                        <div className="mb-2">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" placeholder="Enter First Name" className="form-control" autoComplete="off"/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" placeholder="Enter Last Name" className="form-control" autoComplete="off"/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email">Email ID</label>
                            <input type="email" placeholder="Enter Email" className="form-control" autoComplete="off"/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter Password" className="form-control"/>
                        </div>
                        <div className="d-grid">
                            <button type="button" className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-right lh-l">
                            Already have a account ? <NavLink to="/login" className="ms-2">Sign In</NavLink> 
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup