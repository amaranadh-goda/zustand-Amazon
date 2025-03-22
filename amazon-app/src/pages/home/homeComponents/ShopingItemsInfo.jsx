
//component
import DynamicExplore from './DynamicExplore';
 import {useFetchData} from '../../../FetchDataControler/FetchDataControler';

import './homeItemsCategoryStyle/homeItemsCategory.css'


function ShopingItemsInfo() {
  
    const { homeData} = useFetchData("shopingItemsInfo");
    return (
        <>
    <div className="HomeItemsCategory position-relative " >
  <div className="homeItemsCategory-main-container row row-cols-1 row-cols-md-4 g-3 ">
    {homeData.map((items) => (
      <div key={items.id}>
        <div className="homeItemsCategory-cart">
          <div className='homeItemsCategory-cart-title pt-4 mb-3 ml-4 fw-semibold  '>
            <p className='homeItemsCategory-title'>{items.title}</p>
          </div>
          <div className="container  " >
            <div className="row  mb-2 m-0" >
              <div className="col pr-0 ">
                <img src={items.images[0].itemImg}  className='shopingItemsInfo-img' alt="" />
                <div className='imageTextTitle-container'>
                    <span className='imageTextTitle'>{items.images[0].itemName}</span>
                    <div className='shopingItemsInfo-price'> &#8377;{items.images[0].price}</div>
                </div>
              </div>
              <div className="col pl-3">
                <img src={items.images[1].itemImg} className='shopingItemsInfo-img' alt="" />
                <div className='imageTextTitle-container'>
                    <span className='imageTextTitle'>{items.images[1].itemName}</span>
                    <div className='shopingItemsInfo-price'> &#8377;{items.images[1].price}</div>
                    </div>
              </div>
            </div>

            <div className="row  m-0">
              <div className="col pr-0 ">
                <img src={items.images[2].itemImg}  className='shopingItemsInfo-img' alt="" />
                <div className='imageTextTitle-container'>
                    <span className='imageTextTitle'>{items.images[2].itemName}</span>
                    <div className='shopingItemsInfo-price'> &#8377;{items.images[2].price}</div>
                    </div>
              </div>
              <div className="col pl-3">
                <img src={items.images[3].itemImg}  className='shopingItemsInfo-img' alt="" />
                <div className='imageTextTitle-container'>
                    <span className='imageTextTitle'>{items.images[3].itemName}</span>
                    <div className='shopingItemsInfo-price'> &#8377;{items.images[3].price}</div>
                    </div>
              </div>
            </div>
            
          </div>
          <span className='seeMore-link text-primary '>{items.link}</span>
        </div>
      </div>
    ))}
    <div><DynamicExplore/></div>
    
  </div>
</div>
        </>
    )
}

export default ShopingItemsInfo


