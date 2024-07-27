
import { Link } from 'react-router-dom';

import php from '../assets/php-sql.jpg';
import merns from '../assets/merns.jpg';
import reactjs from '../assets/reactjs.jpg';
import reactnative from '../assets/reactnative.jpg';
import appdev from '../assets/appdev.jpg';
import cplus from '../assets/cplus.jpg';
import c from '../assets/c.jpg';
import chash from '../assets/chash.jpg';
import java from '../assets/java.jpg';
import python from '../assets/python.jpg';
import dsa from '../assets/dsa.png';
import datascience from '../assets/datascience.jpg';
import da from '../assets/data-analytics.jpg';
import ml from '../assets/ml.jpg';
import ai from '../assets/ai.jpg';
import cybersecurity from '../assets/cybersecurity.jpg';
import dbms from '../assets/dbms.jpg';
import uiux from '../assets/uiux.jpg';
import ps from '../assets/ps.jpg';
import aae from '../assets/aae.jpg';
import ux from '../assets/ux.jpg';
import '../componentCss/Courses.css';

function Courses() {
    const coursesData = [
        { id: 1, title: 'Web Development With PHP/MySQL', description: '', image: php, route: '/sqlphp' },
        { id: 2, title: 'Web Development With MERN Stack', description: '', image: merns, route: '/mern' },
        { id: 3, title: 'React JS', description: '', image: reactjs, route: '/reactjs' },
        { id: 4, title: 'React Native', description: '', image: reactnative, route: '/reactnative' },
        { id: 5, title: 'App Development', description: '', image: appdev, route: '/appdev' },
        { id: 6, title: 'C++', description: '', image: cplus, route: '/cplus' },
        { id: 7, title: 'JAVA', description: '', image: java, route: '/java' },
        { id: 8, title: 'C', description: '', image: c, route: '/c' },
        { id: 9, title: 'C#', description: '', image: chash, route: '/chash' },
        { id: 10, title: 'Python', description: '', image: python, route: '/python' },
        { id: 11, title: 'Data Structure and Algorithms', description: '', image: dsa, route: '/dsa' },
        { id: 12, title: 'Data Science', description: '', image: datascience, route: '/ds' },
        { id: 13, title: 'Data Analytics', description: '', image: da, route: '/da' },
        { id: 14, title: 'Machine Learning', description: '', image: ml, route: '/ml' },
        { id: 15, title: 'Artificial Intelligence', description: '', image: ai, route: '/ai' },
        { id: 16, title: 'DBMS', description: '', image: dbms, route: '/dbms' },
        { id: 17, title: 'Cyber Security', description: '', image: cybersecurity, route: '/cyber' },
        { id: 18, title: 'Adobe Photoshop', description: '', image: ps, route: '/ps' },
        { id: 19, title: 'UI/UX Designing', description: '', image: uiux, route: '/uiux' },
        { id: 20, title: 'UX Research', description: '', image: ux, route: '/ux' },
        { id: 21, title: 'Adobe After Effects', description: '', image: aae, route: '/aae' },
    ];

    const handleCardClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="container mt-4">
            <h1 className="ccnt text-center mb-4">Courses Offered</h1>
            <div className="row">
                {coursesData.map(course => (
                    <div key={course.id} className="col-lg-4 col-md-6 mb-4">
                        <Link to={course.route} className="card-link" onClick={handleCardClick}>
                            <div className="card h-100">
                                <img src={course.image} className="card-img-top" alt={course.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{course.title}</h5>
                                    <p className="card-text">{course.description}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
