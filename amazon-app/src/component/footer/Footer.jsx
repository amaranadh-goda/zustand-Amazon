import Logo from '../../assets/headerImg/amazon-logo-removebg.png'
import './footerStyle/footer.css'
//icons
import { CiGlobe } from "react-icons/ci";
import { TiArrowSortedUp ,TiArrowSortedDown} from "react-icons/ti";

function Footer() {
  return (
    <>
      <div className="Footer-container">
        <div className="footer-title">
          Back to top
        </div>
        <div style={{ backgroundColor: "black" }}>
          {/* Remove the container if you want to extend the Footer to full width. */}
          <div className="container w-75">
            {/* Footer */}
            <footer className="text-center text-lg-start text-white" >
              {/* Grid container */}
              <div className="container p-2 pb-0">
                {/* Section: Links */}
                <section>
                  {/* Grid row */}
                  <div className="row">
                    {/* Grid column */}
                
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 ">
                      <h6 className="text-uppercase mb-4 fw-semibold " style={{width:"120px",fontSize:"15px"}}>Get to Know Us</h6>
                      <div  className='GetKnow-first'>
                      <p><a className="text-white text-decoration-none">About Amazon</a></p>
                      <p><a className="text-white text-decoration-none">Careers</a></p>
                      <p><a className="text-white text-decoration-none">Press Releases</a></p>
                      <p><a className="text-white text-decoration-none">Amazon Science</a></p>
                      </div>
                    
                    </div>

                    {/* Grid column */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold" style={{width:"120px",fontSize:"15px"}}>	
                      Connect with Us</h6>
                      <div  className='GetKnow-first'>
                      <p><a className="text-white text-decoration-none">Facebook</a></p>
                      <p><a className="text-white text-decoration-none">Twitter</a></p>
                      <p><a className="text-white text-decoration-none">Instagram</a></p>
                      </div>
                    </div>

                    

                    {/* Grid column */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold" style={{fontSize:"15px"}}>Make Money with Us</h6>
                      <div  className='GetKnow-first'>
                      <p><a className="text-white text-decoration-none">Sell on Amazon</a></p>
                      <p><a className="text-white text-decoration-none">Sell under Amazon Accelerator</a></p>
                      <p><a className="text-white text-decoration-none">Protect and Build Your Brand</a></p>
                      <p><a className="text-white text-decoration-none">Amazon Global Selling</a></p>
                      <p><a className="text-white text-decoration-none">Supply to Amazon</a></p>
                      <p><a className="text-white text-decoration-none">Become an Affiliate</a></p>
                      <p><a className="text-white text-decoration-none">Fulfilment by Amazon</a></p>
                      <p><a className="text-white text-decoration-none">Advertise Your Products</a></p>
                      <p><a className="text-white text-decoration-none">Amazon Pay on Merchants</a></p>
                      </div>
                    </div>

                

                    {/* Grid column */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold" style={{fontSize:"15px"}}>Let Us Help You</h6>
                      <div  className='GetKnow-first'>
                      <p>Your Account</p>
                      <p> Returns Centre</p>
                      <p> Recalls and Product Safety Alerts</p>
                      <p> 100% Purchase Protection</p>
                      <p> Amazon App Download</p>
                      <p>Help</p>
                      </div>
                    </div>
                  </div>
                </section>

                <hr className=""style={{width:"125%", marginLeft:"-160px"}} />

                {/* Section: Copyright */}
                <section className=" d-flex justify-content-center align-items-center p-3 pt-0">
                  <div className='footer-amazon-logo mt-3'style={{marginRight:"50px"}}>
                    <img src={Logo} alt="" style={{width:"115px"}} />
                  </div>
                  <div>
                    <div className='footer-language '><CiGlobe className='fs-6 mr-1'/>English
                    <div className='position-relative 'style={{fontSize:"8px"}}>  
                      <div className=' position-absolute d-flex flex-column' style={{right:"8px",bottom:"2px",color:"whitesmoke"}}>
                      <TiArrowSortedUp />
                      <TiArrowSortedDown />
                        </div>
                        </div>
                  
                    </div>
                  </div>
                </section>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
