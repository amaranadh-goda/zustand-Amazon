

import { useEffect, useState } from 'react';
import './dynamicExploreStyles/dynamicExplore.css';

function DynamicExplore() {
  const [dynamicExploreData, setDynamicExploreData] = useState([]);

  useEffect(() => {
    async function fetchItemsCategoryData() {
      try {
        const response = await fetch("http://localhost:3000/exploreDynamicItems");
        const data = await response.json();

        // Set initial activeImageIndex for each card to 0 it will give the first image
        const dataWithActiveImageIndex = data.map(item => ({
          ...item,
          activeImageIndex: 0,  //we fixed  Default to the first image
        }));

        setDynamicExploreData(dataWithActiveImageIndex);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchItemsCategoryData();
  }, []);

  // Handle image click for each card independently
  const handleImageClick = (itemId, index) => {
    setDynamicExploreData(prevData =>
      prevData.map(item =>
        item.id === itemId
          ? { ...item, activeImageIndex: index }
          : item // Leave other cards unchanged
      )
      
    );
    
  };
console.log(dynamicExploreData,"????????????????????")
  return (
    <div className="dynamicExplore d-flex gap-4">
      {dynamicExploreData.map((item) => (
        <div key={item.id} className="dynamicExplore-card">
          <div className="pt-4 mb-3 ml-4 fw-semibold">
            <p className="dynamicExplore-title">{item.title}</p>
          </div>
          <div className="dynamicExplore-img-container">
            {/* Display the active image for the clicked card */}
            <img 
              src={item.images[item.activeImageIndex]?.itemImg} 
              alt="Dynamic Explore" 
            />
          </div>
          <div className="dynamicExplore-text-container ml-4">
            <p className="dynamicExplore-text">
              {item.description}
              <br />
              <span className="dynamicExplore-price">&#8377;{item.price}</span>
              <span className="dynamicExplore-mrp-container">
                M.R.P:<span className="dynamicExplore-mrp">&#8377;{item.mrp}</span>
              </span>
            </p>
          </div>
          <div className="dynamicExplore-allImg">
      
            {item.images.map((image, index) => (
              <img
                key={index}
                src={image.itemImg}
                alt=""
                className={item.activeImageIndex === index ? 'active' : ''} 
                onClick={() => handleImageClick(item.id, index)} // Update the active image for the clicked card
              />
            ))}
          </div>
          <span className="seeMore-link text-primary">{item.link}</span>
        </div>
      ))}
    </div>
  );
}

export default DynamicExplore;






