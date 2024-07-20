import React from 'react';
import { Link } from 'react-router-dom';
import '../componentCss/Home.css';

function Home() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col my-4">
                    {/* Sidebar */}
                    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '280px' }}>
                        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                            <span className="fs-4">Sidebar</span>
                        </Link>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">
                                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="nav-link text-white">
                                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/orders" className="nav-link text-white">
                                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
                                    Orders
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="nav-link text-white">
                                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/customers" className="nav-link text-white">
                                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
                                    Customers
                                </Link>
                            </li>
                        </ul>
                        <hr />
                        <div className="dropdown">
                            <Link to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                                <strong>mdo</strong>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><Link className="dropdown-item" to="#">New project...</Link></li>
                                <li><Link className="dropdown-item" to="#">Settings</Link></li>
                                <li><Link className="dropdown-item" to="#">Profile</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-9 my-5">
                    {/* Main Content */}
                    <div className="card custom-card" style={{ width: '400px' }}>
                        <div className="card-body">
                            <h4 className="card-title">Hello User!</h4>
                            <p className="card-text">It's good to see you back!</p>
                        </div>
                    </div>

                    {/* Course Card */}
                    <div className="card mt-4 custom-card card-one" style={{ width: '400px' }}>
                        <div className="card-body">
                            <h5 className="card-title card-one-body">English</h5>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%</div>
                            </div>
                        </div>
                    </div>

                    {/* Courses Card */}
                    <div className="card mt-4 custom-card">
                        <div className="card-header">
                            <h5 className="card-title">Courses</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card custom-card course-card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Java</h5>
                                            <p className="card-text">By Thomas | 06h 30m | 4.5</p>
                                            <Link to="/" className="btn btn-primary">View Course</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card custom-card course-card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">C#</h5>
                                            <p className="card-text">By Richard | 05h 20m | 4.5</p>
                                            <Link to="/" className="btn btn-primary">View Course</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card custom-card course-card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">C++</h5>
                                            <p className="card-text">By Harry | 06h 50m | 4.1</p>
                                            <Link to="/" className="btn btn-primary">View Course</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
