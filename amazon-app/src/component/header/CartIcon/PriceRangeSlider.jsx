import { useState } from 'react';
import './cartIconStyles/priceRange.css';
import { Link } from 'react-router-dom';

const PriceRangeSlider = () => {
    const [price, setPrice] = useState(200);
    const maxPrice = 499;

    //   const handleSliderChange = (e) => {
    //     setPrice(e.target.value);
    //   };

    // Calculate the percentage of how much of the green background should be filled
    const fillPercentage = (price / maxPrice) * 100;

    return (
        <div className="container mt-3">
            <div className="form-group d-flex  position-relative mb-0 mt-2">
                <div className="price-range-wrapper ">
                    {/* This div will be the background of the price range */}
                    <div
                        className="price-range-fill"
                        style={{ width: `${fillPercentage}%` }}
                    ></div>
                </div>
                <label htmlFor="priceRange " className='max-price-value'>&#8377;{maxPrice}</label>
            </div>
            <div className='position-relative d-flex flex-column'>
                <p className='priceRange-value'>Add items worth <span className='text-danger'>&#8377;{maxPrice - price}</span> for FREE</p>
                <Link className='Delivery'>Delivery</Link>
                <Link className='Delivery'>View Products ›</Link>
                <span className='mt-3 fs-5 '>Subtotal (1 item): <span className='fw-bold'>&#8377;399.00</span></span>
                <div>
                    <input className="form-check-input position-relative ml-1 mr-2" type="checkbox" value="" id="flexCheckDefault" ></input>
                    <span>This order contains a gift</span>
                </div>
                <button type="button" className="btn btn-warning Proceed-to-Buy mt-2 mb-4 ">Proceed to Buy</button>
            </div>




        </div>
    );
};

export default PriceRangeSlider;
