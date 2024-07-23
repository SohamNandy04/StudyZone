import '../componentCss/About.css'

function About() {

    return(
        <>
            <div>
                <div className="context">
                    <p className="text-start lh-sm">Confused on which course to take? We have got you covered.</p>
                    <p className="text-start lh-sm">Browse courses and find out the best course for you.</p>
                    <p className="text-start lh-sm">Its free! StudyZone is going to teach basics and those coding techniques to people in short time which can take ages to learn.</p>
                </div>

                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <strong>What is StudyZone?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                StudyZone is an OTT platform designed for students, offering a variety of courses. We offer both free and paid courses.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <strong>How do I sign up?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                            <div className="accordion-body">
                            Click on the &quot;Sign Up&quot; button on the homepage and fill in your details. You can also sign up using your Google or Apple Id.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <strong>How do I log in?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                            Click on the &quot;Log In&quot; button and enter your email and password. You can also log in using your Google or Facebook account.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                            <strong>Are all courses free?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                            <div className="accordion-body">
                            No, we offer a mix of free and paid courses. Free courses can be accessed by all users, while paid courses require a subscription or one-time payment.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            <strong>How do I enroll in a course?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                            <div className="accordion-body">
                            For free courses, simply click on the course and then click &quot;Enroll.&quot; For paid courses, you will need to complete the payment process before you can enroll.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                            <strong>What payment methods do you accept?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
                            <div className="accordion-body">
                            We accept credit/debit cards, PayPal, and other major payment methods. Detailed payment options will be shown during the checkout process.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                            <strong>Is there a refund policy for paid courses?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse">
                            <div className="accordion-body">
                            Yes, we offer a 14-day refund policy for most courses. If you are not satisfied, you can request a refund within 14 days of purchase.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                            <strong>Are there any discounts available?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse">
                            <div className="accordion-body">
                            We periodically offer discounts and promotions. Keep an eye on our website and subscribe to our newsletter to stay updated.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                            <strong>I forgot my password. What should I do?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse">
                            <div className="accordion-body">
                            Click on the &quot;Forgot Password&quot; link on the login page, and follow the instructions to reset your password.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
                            <strong>Can I access the courses on my mobile device</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTen" className="accordion-collapse collapse">
                            <div className="accordion-body">
                            Yes, our platform is mobile-friendly, and you can access courses on any device with an internet connection.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="false" aria-controls="panelsStayOpen-collapseEleven">
                            <strong>How can I track my progress?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseEleven" className="accordion-collapse collapse">
                            <div className="accordion-body">
                            You can track your progress through your dashboard, where you will see completed modules, quizzes, and overall course completion status.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About