

// import { useState } from 'react';
// import usePostData from '../../../../FetchDataControler/LoginAuthentication';

// function RegistrationPage() {
//   const [userData, setUserData] = useState({
//     email: '',
//     name: '',
//     password: ''
//   });

//   const postData = usePostData('http://localhost:3000/user');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({
//       ...userData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await postData(userData);
//     console.log(result);
//   };

//   return (
//     <div className='text-align-center amazonSignUp-container-box'>
//       <p>Create Account</p>
//       <form onSubmit={handleSubmit}>
//         <label className="form-label">Enter mobile number or email </label>
//         <input 
//           type="email" 
//           name="email" 
//           className="form-control mb-2" 
//           value={userData.email} 
//           onChange={handleChange}
//         />

//         <label className="form-label">Your name</label>
//         <input 
//           type="text" 
//           name="name" 
//           className="form-control mb-2" 
//           value={userData.name} 
//           onChange={handleChange}
//         />

//         <label className="form-label">Password (at least 6 characters)</label>
//         <input 
//           type="password" 
//           name="password" 
//           className="form-control mb-2" 
//           value={userData.password} 
//           onChange={handleChange}
//         />

//         <button type="submit" className="btn btn-warning w-100 rounded-pill">Submit</button>

//       </form>
//     </div>
//   );
// }

// export default RegistrationPage;


import { useState, useEffect, useRef } from 'react';
// import LogoComponent from './LogoComponent';
import usePostData from '../../../../FetchDataControler/LoginAuthentication';
// import { Link } from 'react-router-dom';
function RegistrationPage() {
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    password: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const { postData, responseData } = usePostData('user');

  const confirmPasswordRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
      if (value === userData.password) {
        setPasswordError('');
      }
    } else {
      setUserData({
        ...userData,
        [name]: value
      });

      if (name === 'password' && value.length >= 6 && value === confirmPassword) {
        setPasswordError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    if (userData.password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    await postData(userData);
  };

  useEffect(() => {
    if (responseData) {
      if (responseData.error === 'User already exists') {
        setEmailError('User already exists, please login.');
      } else {
        setUserData({ email: '', name: '', password: '' });
        setConfirmPassword('');
        setEmailError('');
        if (confirmPasswordRef.current) {
          confirmPasswordRef.current.value = '';
        }
      }
    }
  }, [responseData]);

  return (
    <>
      {/* <LogoComponent /> */}
      <div className='amazonSignUp-container'>
        <div className='text-align-center amazonSignUp-container-box '>
          <p>Create Account</p>
          <form onSubmit={handleSubmit}>
            <label className="form-label">Enter mobile number or email </label>
            <input
              type="email"
              name="email"
              className="form-control mb-2"
              value={userData.email}
              onChange={handleChange}
            />
            {emailError && <small className="text-danger">{emailError}<br /></small>}

            <label className="form-label">Your name</label>
            <input
              type="text"
              name="name"
              className="form-control mb-2"
              value={userData.name}
              onChange={handleChange}
            />

            <label className="form-label">Password (at least 6 characters)</label>
            <input
              type="password"
              name="password"
              className="form-control mb-2"
              value={userData.password}
              onChange={handleChange}
            />

            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control mb-2"
              ref={confirmPasswordRef}
              onChange={handleChange}
            />

            {passwordError && <small className="text-danger">{passwordError}</small>}

            <button type="submit" className="btn btn-warning w-100 rounded-pill">Submit</button>
          </form>
        </div>
      </div>
      {/* <hr />
            <div className='d-flex  flex-column align-items-center'>
                <div className='mb-2' style={{fontSize:"13px"}}>
                <Link to=""className='mr-4 text-decoration-none'> Conditions of Use </Link> 
             <Link to=""className='mr-4 text-decoration-none'> Privacy Notice </Link>  
             <Link to="" className='text-decoration-none'> Help </Link>  
                </div>
             
             <p style={{fontSize:"13px"}}>© 1996–2025, Amazon.com, Inc. or its affiliates </p>
            </div> */}

    </>

  );
}
export default RegistrationPage;
