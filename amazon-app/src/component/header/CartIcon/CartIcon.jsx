

// // import { BsCart2 } from "react-icons/bs";
// import CartIconImg from '../../../assets/headerImg/cartIcon.png'
// import './cartIconStyles/cartIcon.css'
// import {useCartData} from '../../../FetchDataControler/useCartData'
// function CartIcon() {
//     const { cartItemData } = useCartData();  
//     return (
//         <>
        
//             <span style={{ color: "orange", marginLeft: "22px", position: "relative", top: "-3px" }}>{cartItemData.length}</span>
//             <div className='d-flex' style={{ position: "relative", top: "-15px", marginRight: "5px" }}>
//                 {/* <BsCart2 style={{ fontSize: "30px" }} /> */}
//                 <img src={CartIconImg} alt="" style={{width:"43px",height:"27px",position:"absolute",top:"-5px"}} />
//                 <span className='cartText text-white'>Cart</span>
//             </div>
            
//         </>
//     )
// }

// export default CartIcon

import CartIconImg from '../../../assets/headerImg/cartIcon.png';
import './cartIconStyles/cartIcon.css';
// import { useCartData } from '../../../FetchDataControler/useCartData';
import useCartStore from '../../../ZustandStore/Store'
function CartIcon() {
  // const { cartItemData } = useCartData();
  const { cartItems, addToCart } = useCartStore();
  // Ensure homeData has been loaded before rendering the cart length

  return (
    <>
      {/* Cart Length Display */}
      <span
        style={{
          color: "orange",
          marginLeft: "22px",
          position: "relative",
          top: "-3px",
        }}
      >
        {cartItems.length}
         {/* Display the updated cart length */}
      </span>

      {/* Cart Icon */}
      <div className='d-flex' style={{ position: "relative", top: "-15px", marginRight: "5px" }}>
        <img
          src={CartIconImg}
          alt="Cart Icon"
          style={{ width: "43px", height: "27px", position: "absolute", top: "-5px" }}
        />
        <span className='cartText text-white'>Cart</span>
      </div>
    </>
  );
}

export default CartIcon;

