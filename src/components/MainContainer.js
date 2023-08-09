import { useEffect, useLayoutEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurentData from "../utils/mockData";

const MainContianer = () => {
    
    const [restaurantList, setRestaurantList] = useState(restaurentData);
    
    return (
      <div className="main-container">
      {console.log("render called")}
        <div className="filter">
            <button onClick={()=> {
                let filteredData = restaurantList.filter(item=> item?.info?.avgRating > 4.2);
                setRestaurantList(filteredData)
            }}>Filter Data</button>
        </div>
        <div className="restaurant-container">

        {
            restaurantList.map(resItem => {
                return <RestaurantCard resData= {resItem} key={resItem.info.id} />
            })
        }
          
        </div>
      </div>
    );
  };

  
  export default MainContianer;