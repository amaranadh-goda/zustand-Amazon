
//components
// import SignUp from './signupComponents/SignUp'
import LogoComponent from './signupComponents/LogoComponent'
import './loginstyles/signUp.css'

import SignupFooter from './signupComponents/SignupFooter'
import { Outlet } from 'react-router-dom'
function SignUpPage() {
    return (
        <>
            <LogoComponent/>
            <div className='amazonSignUp-container' >
            
            <Outlet/>
            </div>
            
           <SignupFooter/>
        </>

    )
}

export default SignUpPage
