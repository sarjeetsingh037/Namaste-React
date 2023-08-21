
import { useParams } from "react-router-dom";
import useRestaurantMenu  from "../utils/useRestaurantMenu";

const RestaurantMenu = ()=> {

    //const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
const resInfo = useRestaurantMenu(resId);
    // useEffect(()=> {
    //     fetchRestaurantMenu();
    // },[]);

    // const fetchRestaurantMenu = async() => {
    //     const response = await fetch(MENU_API+resId);
    //     const data = await response.json();
    //     console.log(data);
    //     setResInfo(data);
        

    // }
    if(resInfo === null) {
        return <h1>No menu available!!!!</h1>
    }
    // const {name, cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
    //console.log(itemCards);
    return (
        <div>
            {/* <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            {
                itemCards && itemCards.map(item => {
                    return <p>{item?.card?.info?.name} - {item?.card?.info?.price}</p>
                })
            } */}
        </div>
    )
}

export default RestaurantMenu;