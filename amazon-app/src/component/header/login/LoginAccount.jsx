
import { Link, useNavigate } from "react-router-dom";
import { BiSolidUpArrow } from "react-icons/bi";

function LoginAccount() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

const handleLogout = async () => {
    try {
      // Send request to the backend to log the user out and clear their email/session
      await fetch('http://localhost:3000/login', {
        method: 'POST', // Or use DELETE, depending on your backend
        headers: {
          'Content-Type': 'application/json',
          // Include the token if necessary for authentication or validation
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          email: document.cookie.split('=')[1], // Assuming email is in the cookie (adjust based on your cookie structure)
        }),
      });
  
      // Clear the token from localStorage
      localStorage.removeItem('token');
  
      // Optionally, clear the email from cookies (if stored there)
      document.cookie = 'email=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  
      // Redirect to the signUp page or home page
      navigate('/signUp');
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };
  

  return (
    <>
      <div className="Signup-container">
        <div className="Signup">
          <BiSolidUpArrow className="text-white sign-BiSolidUpArrow " />
          <div className="d-flex align-items-center flex-column  mt-3 ">
            <Link to="/signUp" className="text-decoration-none text-dark">
              <div className="signin-button">sign in</div>
            </Link>

            <div className="mb-0">
              <span className=" newCustomer mr-1 " style={{ fontSize: "12px", color: "#a7acb2" }}>New customer?</span>
              <Link to="/signUp" style={{ fontSize: "12px" }}>Start here.</Link>
            </div>
          </div>
          <hr className="ml-3 mr-3 mt-1" />

          <div className="signIn-Links-container d-flex">
            <div className="pl-4 mr-5" style={{ paddingRight: "70px" }}>
              <h4>Your Lists</h4>
              <div className="d-flex flex-column">
                <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Create a Wish list</Link>
                <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Wish from Any Website</Link>
                <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Baby wishlist</Link>
                <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Discover Your Style</Link>
                <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Explore Showroom</Link>
              </div>
            </div>
            <div className="vertical-line">
              <div className="pl-4">
                <h4>Your Account</h4>
                <div className="d-flex flex-column Your-Account ">
                  <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Your Account</Link>
                  <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Your Orders</Link>
                  {token&&<button onClick={handleLogout} className="text-decoration-none text-dark signIn-Links-Items logout-btn">
                    Logout
                  </button>}
                  <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Your Wish List</Link>
                  <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Your Recommendations</Link>
                  <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Your Prime Membership</Link>
                  <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Your Prime Video</Link>
                  <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Your Subscribe & save items</Link>
                  <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Memberships & Subscriptions</Link>
                  <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Your Seller Account</Link>
                  <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Manage Your Content and Devices</Link>
                  <Link to="" className="text-decoration-none text-dark signIn-Links-Items">Register for a free business Account</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAccount;
