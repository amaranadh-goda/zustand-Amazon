
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useCartStore from "../../ZustandStore/Store";
import { useFetchData } from "../../FetchDataControler/FetchDataControler";
import ProductItems from "../ProductsPage/ProductItems";
import { IoIosArrowForward } from "react-icons/io";
import "./productspagestyle/productpage.css";

function ProductsPage() {
    const location = useLocation();
    const id = location.state?.id;
    const image = location.state?.image;
    const endPoint = location.state?.endPoint;
    const { homeData } = useFetchData(endPoint);
    const { cartItems, addToCart, fetchCartItems } = useCartStore();
    const [selectItemData, setSelectItemData] = useState([]);
    const [isInCart, setIsInCart] = useState(false); // Track button state

    useEffect(() => {
        async function fetchItemData() {
            try {
                const response = await fetch(`http://localhost:3000/itemsCategory/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data.");
                }
                const data = await response.json();
                setSelectItemData(data.images);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchItemData();
    }, [id]);

    useEffect(() => {
        // Fetch cart data from the backend whenever the component mounts or the cart items change
        fetchCartItems();
    }, [fetchCartItems]);

    const selectedItem = selectItemData.find((e) => e.itemImg === image);

    useEffect(() => {
        // Check if the item exists in the cart based on the backend data
        if (selectedItem) {
            const isItemInCart = cartItems.some((item) => item.id === selectedItem.id);
            setIsInCart(isItemInCart);
        }
    }, [cartItems, selectedItem]);

    const handleAddToCart = () => {
        if (selectedItem) {
            addToCart(selectedItem); // Add the item to the cart
        }
    };

    return (
        <>
            <section className="AmazonFashion-section1">
                <div className="d-flex justify-content-around align-items-center pt-2">
                    <span className="fs-4 fw-bold">Amazon Fashion</span>
                    <span className="AmazonFashionCatagory">Women</span>
                    <span className="AmazonFashionCatagory">Men</span>
                    <span className="AmazonFashionCatagory">Kids</span>
                    <span className="AmazonFashionCatagory">Bags & Luggage</span>
                    <span className="AmazonFashionCatagory">Sportswear</span>
                    <span className="AmazonFashionCatagory">Sales & Deals</span>
                </div>
                <hr style={{ marginTop: "1px", marginBottom: "0px" }} />
            </section>

            <section className="AmazonFashion-section2">
                <div className="AmazonFashion-section2-container">
                    <span>Clothing & Accessories</span><IoIosArrowForward className="AmazonFashion-ArrowForward" />
                    <span>Men</span><IoIosArrowForward className="AmazonFashion-ArrowForward" />
                    <span>Ethnic Wear</span><IoIosArrowForward className="AmazonFashion-ArrowForward" />
                    <span>Kurtas</span>
                </div>
            </section>

            <section className="AmazonFashion-section3">
                <div className="productImage-container d-flex justify-content-center">
                    {selectedItem && (
                        <div className="card mb-3" style={{ maxWidth: '720px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={selectedItem.itemImg} alt="Product" className="AmazonFashion-productImage" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body" style={{ Width: '200px', marginLeft: "60px" }}>
                                        <h5 className="card-title">{selectedItem.name}</h5>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural lead-in to additional content.
                                        </p>

                                        {/* Add to Cart Button */}
                                        {isInCart ? (
                                            <div className="ml-4 mb-4">In Cart</div>
                                        ) : (
                                            <div className="d-flex justify-content-center mb-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-warning w-75"
                                                    onClick={handleAddToCart}
                                                    style={{
                                                        borderRadius: "50px",
                                                        fontSize: "11px",
                                                    }}
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <section>
                <ProductItems ProductItemsData={homeData} />
            </section>
        </>
    );
}

export default ProductsPage;

