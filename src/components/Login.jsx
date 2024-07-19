import { NavLink } from "react-router-dom"

function Login(){

    return(
        <>
            <div className="login template d-flex justify-content-center align-items-center 100-w vh-100">
                <div className="40-w p-5 rounded bg-white">
                    <form action="">
                        <h3 className="text-center">Sign In</h3>
                        <div className="mb-2">
                            <label htmlFor="email">Email ID</label>
                            <input type="email" placeholder="Enter Email" className="form-control" autoComplete="off"/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter Password" className="form-control"/>
                        </div>
                        <div className="mb-2">
                            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
                            <label htmlFor="check" className="custom-input-label ms-2">Remember Me</label>
                        </div>
                        <div className="d-grid">
                            <button type="button" className="btn btn-primary">Sign In</button>
                        </div>
                        <p className="text-right lh-l">
                            Forget <a href="" className="ms-2">Password ?</a>
                        </p>
                        <p className="text-right lh-1">
                            New Here ? <NavLink to="/signup" className="ms-2">Sign Up</NavLink> 
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login