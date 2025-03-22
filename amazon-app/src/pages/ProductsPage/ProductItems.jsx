
import useCartStore from "../../ZustandStore/Store";
function ProductItems({ ProductItemsData }) {
  const { cartItems, addToCart } = useCartStore(); // Zustand store

  return (
    <>
      <h4 className="ml-5 mb-3">Related Items</h4>
      <section>
        <hr />
        <div className="d-flex gap-5 ml-5">
          <div>For you</div>
          <div>Bestsellers</div>
          <div>Deals</div>
          <div>Most gifted</div>
          <div>Bought together</div>
          <div>Top rated</div>
        </div>
        <hr />
      </section>

      <div className="d-flex justify-content-center mb-5">
        <div className="d-flex justify-content-center row row-cols-5 gx-3 gy-3" style={{ width: "90%" }}>
          {ProductItemsData.map((item, index) => (
            <div key={index}>
              <div className="card" style={{ width: "268px", height: "428px" }}>
                <img
                  src={item.itemImg}
                  alt=""
                  style={{
                    width: "268px",
                    height: "180px",
                    borderRadius: "5px 5px 0px 0px",
                  }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>

                  {item.limited && (
                    <div className="LimitedTime">
                      <button type="button" className="btn btn-danger btn-sm px-3 py-1 ml-3 mb-2">
                        Limited time deal
                      </button>
                    </div>
                  )}
                  <span>&#8377;{item.price}</span>
                </div>

                {/* Check if item is in cart */}
                {cartItems.some(cartItem => cartItem.id === item.id) ? (
                  <div className="ml-4 mb-4">In basket</div>
                ) : (
                  <div className="d-flex justify-content-center mb-4">
                    <button
                      type="button"
                      className="btn btn-warning w-75"
                      onClick={() => addToCart(item)}
                      style={{
                        borderRadius: "50px",
                        fontSize: "11px",
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductItems;