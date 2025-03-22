import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import LogoComponent from './LogoComponent'
import '../loginstyles/signUp.css'
function CreateAccount() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  return (
    <>
    
      <div className='amazonSignUp-container'>
      <div className='text-align-center amazonSignUp-container-box'>
        <p>Looks like you are new to Amazon</p>
        <div className='d-flex'style={{fontSize:"13px"}}>
        <p className='mr-3'>{email}</p><Link className='text-decoration-none' to="/signUp">change</Link>
        </div>
        
        <div className=' email-container'>
          <p style={{ fontSize: "14px" }}>Lets create an account using your mobile number</p>
          <button type="button" className="btn btn-warning w-100 rounded-pill"onClick={()=>navigate('/registration')} style={{ fontSize: "13px" }}>Proceed to create an account</button>

          <hr />
          <p className='mb-0'>Already a customer? </p>
          <Link to="" style={{ fontSize: "13px" }}>Sign in with another email or mobile </Link>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default CreateAccount