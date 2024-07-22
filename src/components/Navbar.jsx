import studyZoneLogo from '../assets/book.svg'
// import {Button} from './Button.jsx'

function Navbar() {
    // align-items-center justify-content-center justify-content-md-between border-bottom

    return (
      <>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">
            <div className="container-fluid">
                <div className=" mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img src={studyZoneLogo} alt="logo" width={20}/>
                        <span className="fs-4">StudyZone</span>
                    </a>
                </div>

                <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="nav   mb-md-0 mx-auto">
                        <li><a href="/home" className="nav-link px-2">Home</a></li>
                        <li><a href="/" className="nav-link px-2">Courses</a></li>
                        <li><a href="/" className="nav-link px-2">Pricing</a></li>
                        <li><a href="/about" className="nav-link px-2">About</a></li>
                    </ul>

                    <div className=" text-end">
                        <a type="button" className="btn btn-outline-primary me-2" href='/login'>Login</a>
                        <a type="button" className="btn btn-primary" href="/signup">Sign-up</a>
                    </div>
                </div>
            </div>
        </nav>
      </>
    )
  }

export default Navbar