import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

import "./loginstyles/login.css";

import LoginAccount from "./LoginAccount";

function Login() {
    const [showSignup, setShowSignup] = useState(false);

    return (
        <div
            className="login-container"
            onMouseEnter={() => setShowSignup(true)}
            onMouseLeave={() => setShowSignup(false)}
        >
            <div className="d-flex flex-column">
                <span className="Hello-sign">Hello, sign in</span>
                <span className="Account-List">
                    Account & List <MdArrowDropDown style={{ fontSize: "18px" }} />
                </span>
            </div>
            {showSignup && (
                <LoginAccount/>
                
            )}
        </div>
    );
}

export default Login;