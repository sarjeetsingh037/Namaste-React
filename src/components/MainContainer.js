import { useEffect, useLayoutEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurentData from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";


const MainContianer = () => {
  const onlineStatus = useOnlineStatus();
    
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");



    useEffect(()=> {
      fetchData();
    },[]);

    const fetchData = async()=> {
      const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999");
      const json = await data.json();
      console.log(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
      setRestaurantList(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }
    
    
    if(!onlineStatus) {
      return <h1>You're Offline, Please check your internet connection...</h1>
    }
    return restaurantList?.length === 0? <p>Loading....</p>:(
      <div className="main-container">
        <div className="filter">
          <div className="search">
            <input type="text" value={searchText} onChange={(e)=> setSearchText(e.target.value)} />
            <button onClick={()=> {
              const filteredResData = restaurantList.filter(res=> res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurants(filteredResData);
            }}>Search</button>
          </div>
            <button onClick={()=> {
                let filteredData = restaurantList.filter(item=> item?.info?.avgRating > 4.2);
                setRestaurantList(filteredData)
            }}>Filter Data</button>
        </div>
        <div className="restaurant-container">

        {
            filteredRestaurants.map(resItem => {
                return <RestaurantCard resData= {resItem} key={resItem.info.id} />
            })
        }
          
        </div>
      </div>
    );
  };

  
  export default MainContianer;