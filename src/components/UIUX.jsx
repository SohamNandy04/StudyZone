import { Link } from 'react-router-dom';
import '../componentCss/sqlphp.css'

function UIUX() {
    return (
        <>
            <div className="course-container">
                <div className="course-details card">
                    <div className="card-body">
                        <h4 className="card-title">Fundamentals of UI/UX Design</h4>
                        <p className="card-text">This professional certificate, developed by Google, covers the foundations of UX design. Learn about empathizing with users, building wireframes, creating prototypes, and conducting research to test your designs. No prior experience required, and it’s 100% remote learning.</p>
                        <Link to="/" className="btn btn-primary">Enroll</Link>
                    </div>

                    <div className="container course-icons card mt-4">
                        <div className="card-body icons-column">
                            <div className="col-sm icon-group ">
                                <span className="icon">📚 Easy to Learn</span>
                                <span className="icon">📹 Self Paced</span>
                                <span className="icon">📅 Duration: 24 weeks</span>
                                </div>
                            <div className=" col-sm icon-group col-sm">
                                <span className="icon">📅 24 weeks </span>
                                <span className="icon">⭐ 4.5 Rating</span>
                                <span className="icon">👤 Anyone can learn</span>
                            </div>
                            <div className="col-sm icon-group col-sm">
                                <span className="icon">⏰ 65 hours</span>
                                <span className="icon">💳 One Time Payment</span>
                                <span className="icon">🌐 English & Hindi</span>
                            </div>
                        </div>


                    </div>

                    <div className="course-curriculum card mt-4">
                        <div className="card-body">
                            <h5>Course Curriculum</h5>
                            <div className="accordion" id="curriculumAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Introduction to Web Development
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#curriculumAccordion">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Overview of web development</li>
                                                <li>HTML and CSS basics</li>
                                                <li>JavaScript Basics</li>
                                                <li>Setting up the development environment</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            React Basics
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#curriculumAccordion">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Introduction to React</li>
                                                <li>Variables and data types</li>
                                                <li>Control structures</li>
                                                <li>Props, Components and Hooks</li>
                                                <li>State Management</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Working with Mongo DB
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#curriculumAccordion">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Introduction to Mongo DB</li>
                                                <li>Setting up the admin panel</li>
                                                <li>Creating and managing databases</li>
                                                <li>Writing SQL queries</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UIUX;
