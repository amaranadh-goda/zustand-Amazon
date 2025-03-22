

//components
import Hero from "./homeComponents/Hero"
import HomeItemsCategory from "./homeComponents/HomeItemsCategory "
import ViewedItems from "./homeComponents/ViewedItems"
import ShopingItemsInfo from "./homeComponents/ShopingItemsInfo"

import BrandOffers from "./homeComponents/BrandOffers"
// import ShopingItemsTwo from './homeComponents/ShopingItemsTwo'
//styles
import './homeStyles/home.css'
function Home() {
  
  return (
    <>

      <div className="homeContainer">
        <div className="hero-container">
          <div className="heroSection">
            <Hero />
          </div>
          <div className="homeItems-Category">
            <HomeItemsCategory jsonEndPoint={"itemsCategory"} />

            <div className="viewedItems-container">
              <ViewedItems jsonEndPoint={"viewedItems"}/>
            </div>
            <div className="browsingHistory-container">
            <ViewedItems jsonEndPoint={"browsingHistory"}/>
            </div>
            <div className="shopingItemsInfo-container">
              <ShopingItemsInfo />
            </div>
            <div className="LeftOffViewedItems-container">
              <ViewedItems jsonEndPoint={"leftOffViewedItems"}/>
            </div>
            <div className="BrandOffers">
              <BrandOffers />
            </div>
            <div className="ShopingItemsTwo">
            <HomeItemsCategory jsonEndPoint={"exploreDynamicTwo"} />
            </div>
        

          </div>
          <div className="stright-line1 "></div>
          <div className="SeePersonalized ">
            <div className="text d-flex flex-column">
              <p className="fs-4 font-weight-bold">See personalized recommendations</p>
            
              <button className="btn btn-warning signInButton ">sign in</button>
              
            </div>
            <span className=" newCustomer mr-1 ">New customer?</span>
            <a href="" style={{fontSize:"12px"}}>Start here.</a>
          </div>
        

        </div>
        
      </div>
      <div className="stright-line2 "></div>






    </>
  )
}

export default Home