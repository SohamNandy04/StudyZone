import studyZoneLogo from '../assets/book.svg'
// import {Button} from './Button.jsx'

function Navbar() {

    return (
      <>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top align-items-center justify-content-center justify-content-md-between border-bottom bg-light">
            <div className="container-fluid">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img src={studyZoneLogo} alt="logo" width={20}/>
                        <span className="fs-4">StudyZone</span>
                    </a>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/home" className="nav-link px-2">Home</a></li>
                    <li><a href="/" className="nav-link px-2">Courses</a></li>
                    <li><a href="/" className="nav-link px-2">Pricing</a></li>
                    <li><a href="/about" className="nav-link px-2">About</a></li>
                </ul>

                <div className="col-md-3 text-end">
                    <a type="button" className="btn btn-outline-primary me-2" href='/login'>Login</a>
                    <a type="button" className="btn btn-primary" href="/signup">Sign-up</a>
                </div>
            </div>
        </nav>
      </>
    )
  }

export default Navbar