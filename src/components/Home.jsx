import { Link } from "react-router-dom"

function Home() {

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark mt-50" style={{width: '280px',marginTop: '3.7rem'}} >
                <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                
                <span className="fs-4">Sidebar</span>
                </Link>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link href="/" className="nav-link active" aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="/home"></use></svg>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="/courses"></use></svg>
                        Courses
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="/profile"></use></svg>
                        Profile
                        </Link>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown">
                    <Link href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                        <strong>mdo</strong>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><Link className="dropdown-item" href="/">Settings</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" href="/">Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home 