import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");
// console.log(heading);
// const jsxHeading = (<h1 className='heading'>JSX Heading</h1>);
// console.log(jsxHeading);

// const parent = React.createElement("div", {id:"parent"},
//     React.createElement("div", {id:"child"}, [
//         React.createElement("h1",{},"I'm the h1 tag"),
//         React.createElement("h2",{},"I'm the h2 tag")
//     ])
// )

// const Title = ()=> (
//     <h1>This is title</h1>
// )

// const headingElement = <h2>This is a h2 heading React Element</h2>;

//Component Composition
// const Heading = ()=> {
//     return <div>
//         <Title />
//         {headingElement}
//         {Title()}
//         <h1>Component Heading</h1>
//     </div>
// }

// console.log(Heading());

//Header Componet
const Header = () => {
  return (
    <div className="header" style={{ backgroundColor: "lightgray" }}>
      <div className="logo">
        <h1>FoodZone</h1>
      </div>
      <div className="navbar-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Restaurant Data
const resData = {
  id: "65797",
  name: "Leon's - Burgers & Wings (Leon Grill)",
  cloudinaryImageId: "8612845c0844e2041265e75e4f77dc96",
  locality: "Koramangala",
  areaName: "Koramangala",
  costForTwo: "₹300 for two",
  cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
  avgRating: 4.3,
  feeDetails: {
    restaurantId: "65797",
    fees: [
      {
        name: "BASE_DISTANCE",
        fee: 2700,
      },
      {
        name: "BASE_TIME",
      },
      {
        name: "ANCILLARY_SURGE_FEE",
      },
    ],
    totalFee: 2700,
  },
  parentId: "371281",
  avgRatingString: "4.3",
  totalRatingsString: "10K+",
  sla: {
    deliveryTime: 19,
    lastMileTravel: 1.3,
    serviceability: "SERVICEABLE",
    slaString: "19 mins",
    lastMileTravelString: "1.3 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2023-08-08 04:00:00",
    opened: true,
  },
  badges: {},
  isOpen: true,
  aggregatedDiscountInfoV2: {
    header: "50% OFF",
    shortDescriptionList: [
      {
        meta: "Use TRYNEW",
        discountType: "Percentage",
        operationType: "RESTAURANT",
      },
    ],
    descriptionList: [
      {
        meta: "50% off up to ₹100 | Use code TRYNEW",
        discountType: "Percentage",
        operationType: "RESTAURANT",
      },
    ],
  },
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textBased: {},
      textExtendedBadges: {},
    },
  },
  orderabilityCommunication: {
    title: {},
    subTitle: {},
    message: {},
    customIcon: {},
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
};

//Restaurant Card

const RestaurantCard = (props) => {

    const {resData} = props;
  return (
    <div className="res-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lllu81nh7eel8lib5ahy"
        alt="Restaurant Image"
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(",")}</h4>
      <p>{resData.avgRatingString}</p>
    </div>
  );
};

//Restaurant Menu or Container
const MainContianer = () => {
  return (
    <div className="main-container">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard resData= {resData} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <MainContianer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
