
import logo from '../../../../assets/headerImg/signUpImg.png'
import '../loginstyles/signUp.css'
function LogoComponent() {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className='amazonSignUp-img '>
                    <img src={logo} className="signUpImg" alt="Sign Up Logo" />
                    <span className='signUpText'>.in</span>
                </div>

            </div>
        </>
    )
}

export default LogoComponent