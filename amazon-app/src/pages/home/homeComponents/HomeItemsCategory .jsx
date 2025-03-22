import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './homeItemsCategoryStyle/homeItemsCategory.css';
import {useFetchData} from '../../../FetchDataControler/FetchDataControler';
const HomeItemsCategory = ({jsonEndPoint}) => {

  const { homeData} = useFetchData(jsonEndPoint);
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
              <Link to="/products" state={{id:items.id,image: items.images[0].itemImg,name:items.images[0].name,endPoint:items.images[0].endPoint ,activactiveStatus:items.images[0].activactiveStatus}}>
              <img src={items.images[0].itemImg}  className='itemsCategory-img' alt="" />
            
              </Link>
                <div className='imageTextTitle-container'><span className='imageTextTitle'>{items.images[0].name}</span></div>
                <span className='d-none'>{items.images[0].endPoint}</span>
              </div>
              <div className="col pl-3">
                <img src={items.images[1].itemImg} className='itemsCategory-img' alt="" />
                <div className='imageTextTitle-container'><span className='imageTextTitle'>{items.images[1].name}</span></div>
              </div>
            </div>

            <div className="row  m-0">
              <div className="col pr-0 ">
                <img src={items.images[2].itemImg}  className='itemsCategory-img' alt="" />
                <div className='imageTextTitle-container'><span className='imageTextTitle'>{items.images[2].name}</span></div>
              </div>
              <div className="col pl-3">
                <img src={items.images[3].itemImg}  className='itemsCategory-img' alt="" />
                <div className='imageTextTitle-container'><span className='imageTextTitle'>{items.images[3].name}</span></div>
              </div>
            </div>
            
          </div>
          <span className='seeMore-link text-primary '>{items.link}</span>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
    
  );
};
HomeItemsCategory.propTypes = {
    jsonEndPoint: PropTypes.string.isRequired, // Ensure jsonEndPoint is a required string prop
};
export default HomeItemsCategory;

