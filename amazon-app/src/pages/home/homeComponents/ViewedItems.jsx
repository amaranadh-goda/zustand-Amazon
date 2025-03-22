

import { useRef } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useFetchData } from '../../../FetchDataControler/FetchDataControler';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './viewedItemStyles/viewedItems.css';

function ViewedItems({ jsonEndPoint }) {
    const imagesRef = useRef(null); 
    const { homeData } = useFetchData(jsonEndPoint);

    // Scroll functions
    const scrollLeft = () => {
        if (imagesRef.current) {
            imagesRef.current.scrollLeft -= 800;
        }
    };

    const scrollRight = () => {
        if (imagesRef.current) {
            imagesRef.current.scrollLeft += 800;
        }
    };

    return (
        <div className="viewedItems bg-white">
            <div className="viewedItems-container">
                {homeData?.map((items) => (
                    <div key={items.id}>
                        <span className="viewedItemsTitle fw-semibold ml-4">{items.title}</span>
                        <span className="viewedItems-link text-primary ml-3">{items.link}</span>

                        {/* Left Arrow */}
                        <button className="arrow-btn left" onClick={scrollLeft}>
                            <IoIosArrowBack />
                        </button>

                        {/* Image Carousel */}
                        <div className="viewedItems-images" ref={imagesRef}>
                            {items.images?.map((image, index) => (
                                <img key={index} src={image.itemImg} alt={`Image ${index + 1}`} />
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button className="arrow-btn right" onClick={scrollRight}>
                            <IoIosArrowForward />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}


ViewedItems.propTypes = {
    jsonEndPoint: PropTypes.string.isRequired, // Ensure jsonEndPoint is a required string prop
};

export default ViewedItems;
