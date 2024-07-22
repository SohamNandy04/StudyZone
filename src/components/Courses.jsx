import php from '../assets/php-sql.jpg'
import merns from '../assets/merns.jpg'
import reactjs from '../assets/reactjs.jpg'
import reactnative from '../assets/reactnative.jpg'
import appdev from '../assets/appdev.jpg'
import cplus from '../assets/cplus.jpg'
import c from '../assets/c.jpg'
import chash from '../assets/chash.jpg'
import java from '../assets/java.jpg'
import python from '../assets/python.jpg'
import dsa from '../assets/dsa.png'
import datascience from '../assets/datascience.jpg'
import da from '../assets/data-analytics.jpg'
import ml from '../assets/ml.jpg'
import ai from '../assets/ai.jpg'
import cybersecurity from '../assets/cybersecurity.jpg'
import dbms from '../assets/dbms.jpg'
import uiux from '../assets/uiux.jpg'
import ps from '../assets/ps.jpg'
import aae from '../assets/aae.jpg'
import ux from '../assets/ux.jpg'
import '../componentCss/Courses.css';
function Courses() {
    const coursesData = [
        { id: 1, title: 'Web Development With PHP/MySQL', description: '', image: php },
        { id: 2, title: 'Web Development With MERN Stack', description: '', image: merns },
        { id: 3, title: 'React JS', description: '', image: reactjs},
        { id: 4, title: 'React Native', description: '', image: reactnative },
        { id: 5, title: 'App Development', description: '', image: appdev },
        { id: 6, title: 'C++', description: '', image: cplus },
        { id: 7, title: 'JAVA', description: '', image: java },
        { id: 8, title: 'C', description: '', image: c },
        { id: 9, title: 'C#', description: '', image: chash  },
        { id: 10, title: 'Python', description: '', image: python },
        { id: 11, title: 'Data Structure and Algorithms', description: '', image: dsa },
        { id: 12, title: 'Data Science', description: '', image: datascience },
        { id: 13, title: 'Data Analytics', description: '', image: da },
        { id: 14, title: 'Machine Learning', description: '', image: ml },
        { id: 15, title: 'Artificial Intelligence', description: '', image: ai },
        { id: 16, title: 'DBMS', description: '', image: dbms },
        { id: 17, title: 'Cyber Security', description: '', image: cybersecurity },
        { id: 18, title: 'Adobe Photoshop', description: '', image: ps },
        { id: 19, title: 'UI/UX Designing', description: '', image: uiux },
        { id: 20, title: 'UX Research', description: '', image: ux },
        { id: 21, title: 'Adobe After Effects', description: '', image: aae },
    ];

    return (
            <div className="container mt-4">
                <h1 className="ccnt text-center mb-4">Courses Offered</h1>
                <div className="row">
                    {coursesData.map(course => (
                        <div key={course.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <img src={course.image} className="card-img-top" alt={course.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{course.title}</h5>
                                    <p className="card-text">{course.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
}

export default Courses;