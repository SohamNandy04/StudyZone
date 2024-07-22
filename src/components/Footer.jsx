function Footer() {
    let currDate = new Date();

    return (
        <footer className=" py-2">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3 fw-semibold">
                <li className="nav-item"><a href="/home" className="litxt nav-link px-2">Home</a></li>
                <li className="nav-item"><a href="#" className="litxt nav-link px-2">Pricing</a></li>
                <li className="nav-item"><a href="#" className="litxt nav-link px-2">FAQs</a></li>
                <li className="nav-item"><a href="/about" className="litxt nav-link px-2">About</a></li>
            </ul>
            <p className="copyrighttxt fw-semibold">Copyright © {currDate.getFullYear()} StudyZone</p>
        </footer>
    );
}

export default Footer;
