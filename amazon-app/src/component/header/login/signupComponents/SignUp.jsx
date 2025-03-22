
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useCheckEmail from '../../../../FetchDataControler/useCheckEmail';

// function SignUp() {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { checkEmail } = useCheckEmail();

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async () => {
//     if (!email) {
//       setError('Please enter your email');
//       return;
//     }

//     const response = await checkEmail(email);
//     if (response.exists) {
//       document.cookie = `email=${email}; path=/;`;
//       navigate('/'); // Redirect to home page
//     }
//     else {
//       // setSignupPageState(!signupPageState);
//       navigate('/createaccount', { state: { email } })
//     }
//   };

//   return (
//     <>
//       <div className='text-align-center amazonSignUp-container-box' >
//         <p>Sign in or create account</p>
//         <div className='email-container'>
//           <label className="form-label">Enter mobile number or email</label>
//           <input
//             type="email"
//             className="form-control mb-2"
//             value={email}
//             onChange={handleChange}
            
//           />
//           {error && <small className="text-danger">{error}</small>}
//           <button onClick={handleSubmit} className="btn btn-warning w-100 rounded-pill "style={{ fontSize: "14px" }}>Continue</button>
//           <p style={{ fontSize: "13px" }}>
//             By continuing, you agree to Amazons <a href="">Conditions of Use</a> and <a href="">Privacy Notice</a>.
//           </p>
//           <hr />
//           <p className='mb-0'>Buying for work?</p>
//           <a href="" style={{ fontSize: "13px" }}>Shop on Amazon Business</a>
//         </div>
    
//       </div>
    
//     </>

//   );
// }
// export default SignUp;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCheckEmail from '../../../../FetchDataControler/useCheckEmail';

function SignUp() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { checkEmail } = useCheckEmail();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    setError(''); // Clear any previous error message

    if (!email) {
      setError('Please enter your email');
      return;
    }

    const response = await checkEmail(email);
    if (response.exists) {
      try {
        // 1. Send login request to backend with email
        const loginResponse = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }), // Pass the email to backend
        });

        const data = await loginResponse.json();

        if (loginResponse.ok) {
          localStorage.setItem('token', data.email); // Save the token

          // Optionally, set the email in a secure cookie for additional info
          // document.cookie = `email=${email}; path=/; Secure; SameSite=Strict;`; // HTTPOnly and Secure cookie

          // Redirect to home page
          navigate('/');
        } else {
          setError('Login failed. Please try again.');
        }
      } catch (err) {
        setError('Error occurred while logging in. Please try again.');
      }
    } else {
      // Redirect to create account page if email doesn't exist
      navigate('/createaccount', { state: { email } });
    }
  };

  return (
    <>
      <div className="text-align-center amazonSignUp-container-box">
        <p>Sign in or create account</p>
        <div className="email-container">
          <label className="form-label">Enter mobile number or email</label>
          <input
            type="email"
            className="form-control mb-2"
            value={email}
            onChange={handleChange}
          />
          {error && <small className="text-danger">{error}</small>}
          <button
            onClick={handleSubmit}
            className="btn btn-warning w-100 rounded-pill"
            style={{ fontSize: '14px' }}
          >
            Continue
          </button>
          <p style={{ fontSize: '13px' }}>
            By continuing, you agree to Amazons <a href="">Conditions of Use</a> and <a href="">Privacy Notice</a>.
          </p>
          <hr />
          <p className="mb-0">Buying for work?</p>
          <a href="" style={{ fontSize: '13px' }}>Shop on Amazon Business</a>
        </div>
      </div>
    </>
  );
}

export default SignUp;
