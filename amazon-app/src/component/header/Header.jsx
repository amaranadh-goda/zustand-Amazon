import { Link } from "react-router-dom";
// images or Logo
import amazonLogo from '../../assets/headerImg/amazon-logo-removebg.png'
//react icons or svg icons or imagebased icons 
import { CiLocationOn } from "react-icons/ci";
//All components 
import Search from './Search/Search';
import Language from './language/Language';
import Login from './login/Login';
import OrderReturn from './OrderReturn/OrderReturn';
import CartIcon from './CartIcon/CartIcon';

//header second line 
import SideMunuBar from './menuBar/SideMunuBar';
// Css files and styels 
import '../header/headerStyles/header.css'

function Header() {
    return (
        <>
            <header className='bg-dark text-white' >{/* header open*/}
                <div className='top-container ' style={{ height: "70px" }}>{/* top-container open*/}
                    <div className="top-main-container d-flex justify-content-between">{/*top-main-container open */}
                        <div className="amazon-logo-container d-flex  p-3 " style={{ width: "368px" }}>
                        <Link to="/"><img src={amazonLogo} className='amazonLogo' alt="amazonlogo" /></Link>
                            <span className=''style={{position:"absolute",left:"123px",top:"22px",fontSize:"14px"}}>.in</span>
                            <div className='update-location d-flex flex-column ml-4 '>
                                <span className="Delivering" >Delivering to visaka...530001</span>
                                <span className="UpdateLocatioin"  ><CiLocationOn style={{ fontSize: "23px" }} />Update locatioin</span>
                            </div>
                        </div>
                        <div className='Search-container flex-fill pt-2'>{/*Search-container open */}

                            <Search />

                        </div>{/*Search-container end */}
                        <div className='right-container d-flex  ml-4 '>{/*right-container open */}
                            <div className='right-container-item'>

                                < Language />
                            </div>
                            <div className='right-container-item'>

                                <Login />

                            </div>
                            <div className='right-container-item'>

                                <OrderReturn />

                            </div>
                            <div className='right-container-item'>
                                 <Link to="/cart"><CartIcon /></Link>
                                
                            </div>

                        </div>{/*right-container end */}
                    </div>{/*top-main-container end */}

                </div>{/* top-container end*/}
                <div className='bottom-container d-flex'>{/* bottom-container open*/}
                    <div className='sidemenu ml-4 me-4 mb-2 'style={{position:"relative",top:"-5px"}}>
                        <SideMunuBar />
                    </div>
                    <div className='header-All-nav-items d-flex flex-wrap'style={{position:"relative",top:"-3px"}}>
                        <div className='me-3 mb-2'>Fresh</div>
                        <div className='me-3 mb-2'>Mx Player</div>
                        <div className='me-3 mb-2'>Sell</div>
                        <div className='me-3 mb-2'>Best Sellers</div>
                        <div className='me-3 mb-2'>Todays</div>
                        <div className='me-3 mb-2'>Mobiles</div>
                        <div className='me-3 mb-2'>Customer Service</div>
                        <div className='me-3 mb-2'>Electronics</div>
                        <div className='me-3 mb-2'>Prime</div>
                        <div className='me-3 mb-2'>New Releases</div>
                        <div className='me-3 mb-2'>Amazon Pay</div>
                        <div className='me-3 mb-2'>Home & Kitchen</div>
                        <div className='me-3 mb-2'>Fashion</div>
                        <div className='me-3 mb-2'>Computers</div>
                        <div className='me-3 mb-2'>Books</div>
                        <div className='me-3 mb-2'>Car & Motorbike</div>
                        <div className='me-3 mb-2'>Toys & Games</div>
                    </div>
                </div>{/* bottom-container end*/}

            </header>{/* header end*/}
        </>
    )
}

export default Header