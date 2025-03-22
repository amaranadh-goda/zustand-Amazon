import { Link } from "react-router-dom";
import { useEffect } from "react";
import PriceRange from './PriceRangeSlider';
import './cartIconStyles/cartPage.css';
import CartItems from './CartItems';
import useCartStore from "../../../ZustandStore/Store";
//logo or images
import FulFilledImg from "../../../../public/Images/fulfilled.png";

function CartPage() {
  const { saveCartItems,fetchSavedItems,moveToCart,deletSaveItem} = useCartStore(); // Assuming there's a function to deselect all items
useEffect(() => {
  fetchSavedItems();
    }, [fetchSavedItems]);

  return (
    <>
      <div className="CartPage">
        <div className="d-flex position-relative">
          <div className="d-flex flex-column CartPage-Shopping-container" style={{ marginBottom: "80px" }}>
            <section className="CartPage-Shopping-Cart shoping-Cart bg-light">
              <div className="shoping-Cart-header mb-2 ml-3">
                <h3 className="mb-0">Shopping Cart</h3>
                <Link className="text-decoration-none" style={{ fontSize: "14px", color: "#2162a1" }} >
                  <span className="Deselect-all-item">Deselect all items</span>
                </Link>
                <div className="Price mb-0">
                  <span>Price</span>
                </div>
              </div>
              <hr className="ml-3 mr-3" />
              <div>
                <CartItems /> {/* Assuming CartItems will render all items in the cart */}
              </div>
            </section>

            <section className="CartPage-Your-Items shoping-Cart bg-light">
              <div className="shoping-Cart-header mb-2 ml-3">
                <h3 className="mb-0">Your Items</h3>
                <Link className="text-decoration-none mr-5" style={{ fontSize: "12px" }}>
                  {saveCartItems.length === 0 ? (
                    <span>No items saved for later</span>
                  ) : (
                    <span>Items saved for later</span>
                  )}
                </Link>
                <Link className="text-decoration-none" style={{ fontSize: "12px" }}>
                  <span>Buy it again</span>
                </Link>
              </div>
              <div className="d-flex gap-3 ml-3" >
                {saveCartItems.length === 0 ? (
                  <div className="No-saved-items">
                  <p  >No saved items</p>
                  </div>
                ) : (
                  saveCartItems.map((item) => (
                    
                    <div key={item.id}  >
                    
                      <div className="card" style={{ width: '16rem' }}>
                        <div style={{padding:"20px",height:"220px"}}>
                      <img className="card-img-top" src={item.itemImg} alt="Item image" style={{height:"200px"}} />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text mb-0">&#8377;{item.price}</p>
                        <span className="In-stock">In stock</span>
                        <div className="Eligible-for-FREE-Shipping">Eligible for FREE Shipping</div>
                        <img src={FulFilledImg}  alt="Fulfilled"  />
                        <div className="moveToCart mt-3 mb-3">
                        <div className=" p-1 text-center border border-secondary rounded-5 w-100 moveto-cart" onClick={() => moveToCart(item.id)}>Move to cart</div>
                        </div>
                        <div className="delet-items " onClick={()=>deletSaveItem(item.id)} > Delete</div>
                        <div className="addList-items " > Add to list</div>                        
                        <div className="seeMore-items "> See more like this</div>
                        {/* Add additional details here */}
                      </div>
                      </div>
                    
                    
                      
                    </div>
                  ))
                )}
              </div>
              <hr className="ml-3 mr-3" />
            </section>
          </div>

          <div className="d-flex flex-column" style={{ marginBottom: "80px", marginLeft: "20px" }}>
            <section className="CartOrder-container shoping-Cart-invoice bg-light mb-4">
              <div className="shoping-Cart-header mb-2 ml-3">
                <PriceRange />
              </div>
            </section>
            <section className="Your-recently-viewed shoping-Cart bg-light">
              <div className="shoping-Cart-header mb-2 ml-3">
                <h3 className="mb-0 mt-3 fs-4">Your recently viewed items</h3>
                <div>
                  {/* Render recently viewed items here */}
                </div>
              </div>
              <hr className="ml-3 mr-3" />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
