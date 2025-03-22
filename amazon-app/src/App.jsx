import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route, useLocation } from "react-router-dom";

import Header from './component/header/Header';
import Home from './pages/home/Home';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Cartpage from './component/header/CartIcon/CartPage';
import Footer from './component/footer/Footer';
import SignUpPage from './component/header/login/SignUpPage';
import SignUp from './component/header/login/signupComponents/SignUp';
import CreateAccount from './component/header/login/signupComponents/CreateAccount';
import RegistrationPage from './component/header/login/signupComponents/RegistrationPage';
import './App.css';

function App() {
  const location = useLocation();

  // Only render the Header and Footer if the current route is not '/signUp'
  // const showHeaderAndFooter = location.pathname !== '/signUp' && location.pathname !== '/createaccount'&&location.pathname !== '/registration';
  const showHeaderAndFooter =location.pathname !== '/signUp' &&  location.pathname !== '/createaccount'&&location.pathname !== '/registration';
  return (
    <>
      {showHeaderAndFooter && <Header />}

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cartpage />} />
          {/* <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/registration" element={<RegistrationPage />} /> */}
          <Route  element={<SignUpPage />}>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/registration" element={<RegistrationPage />} />
          </Route>
        </Routes>
      </div>

      {showHeaderAndFooter && <Footer />}
    </>
  );
}

export default App;