import '../componentCss/Body.css'
import google from '../assets/googleicon.svg'
import apple from '../assets/appleicon.svg'
// import bgimage from '../assets/bgpic.jpg'
import stdypic from '../assets/footerimg.png'

function Body() {

    // const hrstyle={
    //   width: 'auto',
    //   color: 'red',
    // }

    return (
      <>
        {/* <img src={bgimage} alt="img" className='bgimg'/> */}
        <div className="content">
          <div id='' className="content position-absolute top-50 start-50 translate-middle">
              <p className='text-center fw-bold lh-1'>Unlock your potential with the</p>
              <p className='text-center fw-bold lh-1'>Power of Knowledge</p>
              <p className='text-center fs-5 fw-semibold lh-sm'>Learn, grow and thrive with StudyZone</p>

              <input className="formtb form-control text-start lh-mg" type="text" placeholder="Enter your email address"></input>
              <a href='/signup' type='button' className='btn btn-primary d-grid col-2 mx-auto mt-3'>Get Started</a>
              <p className='btnformtb fs-6 text-center lh-mg fw-semibold'>or sign up with</p>
              <div className="d-grid col-1 mx-auto">
                  <a href="" className="d-inline-flex link-body-emphasis text-decoration-none">
                      <img src={google} alt="logo" height={25}/>
                      <img src={apple} alt="logo" height={25}/>
                  </a>
              </div>
          </div>
        </div>

        <section className="divSect">

          <div className="lefttxt">
            <p className='text-start fw-bold lh-1'>Transforming learning into a</p>
            <p className='text-start fw-bold lh-1'>joyful experience.</p>
            <h6>Join us on this exciting journey today!</h6>
          </div>

          <div className='bodyimg'>
            <img src={stdypic} alt="photo" className='bodyImg' height={330}/>
          </div>

        </section>
      </>
    )
  }
  
  export default Body