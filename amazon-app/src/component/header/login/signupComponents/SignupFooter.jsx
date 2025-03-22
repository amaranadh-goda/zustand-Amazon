import { Link } from "react-router-dom"


function SignupFooter() {
  return (
    <>
        <hr />
            <div className='d-flex  flex-column align-items-center'>
                <div className='mb-2' style={{fontSize:"13px"}}>
                <Link to=""className='mr-4 text-decoration-none'> Conditions of Use </Link> 
             <Link to=""className='mr-4 text-decoration-none'> Privacy Notice </Link>  
             <Link to="" className='text-decoration-none'> Help </Link>  
                </div>
             
             <p style={{fontSize:"13px"}}>© 1996–2025, Amazon.com, Inc. or its affiliates </p>
            </div>
    </>
  )
}

export default SignupFooter