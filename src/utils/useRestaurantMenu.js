import { useState, useEffect } from "react"
import { MENU_API } from "../utils/constants";
const useRestaurantMenu = (resId)=> {
    
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=> {
        fetchRestaurantMenu();
    },[]);

    const fetchRestaurantMenu = async() => {
        const response = await fetch(MENU_API+resId);
        const data = await response.json();
        console.log(data);
        setResInfo(data.data);
        

    }
    return resInfo;
}

export default useRestaurantMenu;