import { NavLink } from "react-router-dom";
import "../componentCss/Login.css"

function Login() {
    return (
        <div className="login-page d-flex justify-content-center align-items-center vh-100">
            <div className="login-container p-4 p-md-5 rounded bg-light shadow">
                <h3 className="text-center mb-4">Sign In</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email ID</label>
                        <input type="email" id="email" placeholder="Enter Email" className="form-control" autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" className="form-control" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check" />
                        <label htmlFor="check" className="form-check-label">Remember Me</label>
                    </div>
                    <div className="d-grid">
                        <button type="button" className="btn btn-primary">Sign In</button>
                    </div>
                    <div className="text-center mt-3">
                        <p>
                            <a href="#" className="text-decoration-none">Forgot Password?</a>
                        </p>
                        <p>
                            New Here? <NavLink to="/signup" className="text-decoration-none">Sign Up</NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
