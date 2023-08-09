import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {resData} = props;
  return (
    <div className="res-card">
      <img
        src={CDN_URL+resData?.info?.cloudinaryImageId}
        alt="Restaurant Image"
      />
      <h3>{resData?.info?.name}</h3>
      <h5>{resData?.info?.cuisines.join(", ")}</h5>
      <p>{resData?.info?.avgRatingString}</p>
    </div>
  );
};

export default RestaurantCard;